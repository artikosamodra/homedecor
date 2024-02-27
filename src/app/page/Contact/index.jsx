const ContactSec = () => {
  return (
    <section>
      <div className="lg:p-20 p-10">
        <h1 className="text-4xl text-red-700 pb-10 font-bold">Contact Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          cupiditate maiores possimus dolorem ab deleniti sit, tempore
          perspiciatis ex quae.
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
