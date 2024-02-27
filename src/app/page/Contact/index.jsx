const ContactSec = () => {
  return (
    <section id="contact" className="lg:pt-10 pt-20">
      <div className="lg:p-20 p-10">
        <h1 className="text-4xl text-red-700 pb-10 font-bold">Contact Us</h1>
        <p>
          If you any of our services, feel free to contact us. Out customer care
          helpdesk is always avaible to receive all your request and get them
          address.
        </p>
        <form className="grid grid-cols-2 gap-4 bg-gray-300 py-10 px-5 rounded-md mt-10">
          <input
            type="text"
            id="username"
            placeholder="firstname"
            className="md:col-span-1 col-span-2 h-12 p-5 rounded-lg"
          />
          <input
            type="text"
            id="username"
            placeholder="lastname"
            className="md:col-span-1 col-span-2 h-12 p-5 rounded-lg"
          />
          <input
            type="text"
            id="username"
            placeholder="email"
            className="md:col-span-1 col-span-2 h-12 p-5 rounded-lg"
          />
          <input
            type="text"
            id="username"
            placeholder="website"
            className="md:col-span-1 col-span-2 h-12 p-5 rounded-lg"
          />
          <input
            type="text"
            id="username"
            placeholder="message"
            className="col-span-2 h-32 p-5 rounded-lg"
          />
          <button
            type="submit"
            className="col-span-2 h-16 p-5 rounded-lg bg-red-700 text-white font-bold mt-10"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSec;
