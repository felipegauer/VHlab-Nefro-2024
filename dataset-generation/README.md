# Project Overview

This project is an automated way to generate subsets of DBRaw based on if patients follow certain rules:

1. Patients must meet minimum requirements (Age >= 18 && Number of records >= 3).
2. Patients must not have a sequential break on their exam appearences larger than the maximum tolerance.
3. For each of it's individual exams, patients can't have a gap in records longer than the maximum tolerance. 
4. Patients must have at least one row with **no missing data**.

The maximum tolerances are user-defined parameters that can be altered in the `PatientAllocation.ipynb` file.
```
MAX_SEQUENCE_BREAK_TOLERANCE = 2 # Maximum gap, in months, that a patient can have between exam appearances.
MAX_PERIOD_TOLERANCE_FOR_MONTHLY_EXAMS = 2 # Maximum gap, in months, that a patient can have on it's monthly exams.
MAX_PERIOD_TOLERANCE_FOR_OTHER_EXAMS = 1 # Maximum gap, in PERIODS, that a patient can have on it's other exams.
```

The maximum tolerance for monthly exams is defined in months, while the maximum tolerance for other exams is defined in **periods**. A period **varies according to the exam frequency**. So, for quartely exams, a period is 3 months, for biannual exams, a period is 6 months, and so on.

> It's important to note that the `DBRaw.xlsx` file contained inside this project is the raw dataset with ONLY the columns for the 22 biomarkers that will be analyzed. Other columns have been removed in order to reduce the file size and speed up execution.

This project is split into three parts, each contained in a separate file:

- `PatientAllocation.ipynb`: This file contains the logic that allocates patients into subsets of DBRaw based on the rules described above. **The output of this file is a spreadsheet of PATIENTS, without their exam data**. This spreadseet is saved on `out/patients.xlsx`.
- `BuildDB.ipynb`: This file contains the logic to build the subsets of DBRaw based on the patients allocated in the previous step. The output of this file are two files: `out/DBClean.xlsx` and `out/DBCompleted.xlsx`. **These files contain the actual exam data of the patients, and are the files that will be used to train the ML models**
- `AllocationAnalysis.ipynb`: This file is the final step, and analyzes the distribution of patients in the subsets generated. It generates piecharts showing those distributions, as well as the distribution on the reasons of why patients ended up in DBGarbage.

The project is designed to be run in the order described above. The output of each step is used as input for the next step.

## How to run the project

1. Open the `PatientAllocation.ipynb` file and run all cells, changing each maximum tolerance as needed. This will generate the `out/patients.xlsx` file.
2. The next step is running the `BuildDB.ipynb` file. This will use the results from the generated `patients` spreadsheet and generate the Datasets.
3. Finally, running the `AllocationAnalysis.ipynb` will showcase the results of the generated dastasets

