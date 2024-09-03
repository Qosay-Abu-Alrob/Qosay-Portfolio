import EmailIcon from "../assets/EmailIcon.png";
import TelIcon from "../assets/TelIcon.png";
function ContactMe() {
return (
    <section id="Contact">
        <div className="max-w-2xl mx-auto p-6">
        <div className="mb-8 text-center">
            <h2 className="xs:text-[28px] md:text-[56px]  xs:pt-5 font-bold mb-4 text-primary">
            Contact Me
            </h2>
            <div className="flex items-center justify-center mb-4">
            <img src={EmailIcon} alt="email" className="w-10" />
            <a href="mailto: qusai-2013@hotmail.com"> qusai-2013@hotmail.com </a>
            </div>
            <div className="flex items-center justify-center mb-4">
            <img src={TelIcon} alt="Tel" className="w-10" />
            <a href="tel:+970598475391">+970598475391</a>
            </div>
        </div>
        <form
            method="post"
            action="https://formspree.io/f/xwkzerop"
            className="space-y-4"
        >
            <div>
            <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="name"
            >
                Your Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
            />
            </div>
            <div>
            <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
            >
                Your Email
            </label>
            <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
            />
            </div>
            <div>
            <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="message"
            >
                Your Message
            </label>
            <textarea
                id="message"
                name="message"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder="Enter your message"
            ></textarea>
            </div>
            <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
            >
            Send Message
            </button>
        </form>
        </div>
    </section>
);
}

export default ContactMe;
