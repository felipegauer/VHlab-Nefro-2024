const get = async (url, token) => {
  let dataR = { err: "error" };
  await fetch(`https://v-hlab-nefro-2024-c6chqtq7v-felipes-projects-00b95a9d.vercel.app${url}`, {
    method: "GET",
    headers: {
      "authorization-token": token,
    },
    
  })
    .then((res) => res.json())
    .then((data) => (dataR = data))
    .catch((err) => (dataR.err = err));

  return dataR;
};

const post = async (url, data) => {
  let dataR = { err: "error" };
  await fetch(`https://v-hlab-nefro-2024-c6chqtq7v-felipes-projects-00b95a9d.vercel.app${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "no-cors",
  })
    .then((res) => res.json())
    .then((data) => (dataR = data))
    .catch((err) => (dataR.err = err));

  return dataR;
};

export default { get, post };
