import { FormControl } from "@mui/material";

function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-16 gap-16">
      <div className=" flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Contate nosso time</h1>
        <p className="font-normal max-w-[730px] ">
          Algum duvida, sugestão ou erros encontrados na nossa plataforma?
          Contate-nos que entraremos em contato assim que possível.{" "}
        </p>
      </div>

      <FormControl className="text-start gap-3 text-sm">
        <div className=" flex gap-4">
    
          <label className="font-semibold" htmlFor="name">Nome
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            className="w-full p-2 border border-gray-400 rounded-lg"
          /></label>
          <label className="font-semibold" htmlFor="surname">Sobrenome
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Sobrenome"
            className="w-full p-2 border border-gray-400 rounded-lg"
          /></label>
        </div>

        <label className="font-semibold" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="seuemail@dominio.com"
          className="w-full p-2 border border-gray-400 rounded-lg"
        />
        <label className="font-semibold" htmlFor="message">Mensagem</label>
        <textarea 
          name="message"
          id="message"
          placeholder="Nos deixe uma mensagem..."
          className="w-full p-2 border border-gray-400 rounded-lg h-32"
        />

        <button className="color-bg hover:bg-light-blue-900 text-white p-2 rounded-lg w-full"> Enviar mensagem </button>
      </FormControl>
    </div>
  );
}

export default ContactPage;
