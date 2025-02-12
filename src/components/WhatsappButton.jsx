export const WhatsAppButton = ({ name, email, textmessage }) => {


  const phoneNumber = "2348034740048"; // Use international format without `+`
  const message = encodeURIComponent(
    `Hi PB Designs, my name is ${name}.\n${textmessage}\nMy email is: ${email}.`
  );

  const handleWhatsAppClick = () => {
    if (!name || !email) {
      alert("Please provide a valid name and email.");
      return;
    }
    if (!textmessage) {
      alert("Please leave us a message before submitting.");
      return;
    }
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="bg-black-300 border text-white font-bold py-5  px-4 rounded-lg hover:bg-green-600 transition"
    >
      Contact Us on WhatsApp
    </button>
  );
};
