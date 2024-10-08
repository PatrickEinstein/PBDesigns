import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };
    const handleSubmit = async (e) => {
        // service_fdp4bit
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                "service_fdp4bit",
                "template_2uh3bto",
                {
                    from_name: form.name,
                    to_name: "Patrick",
                    from_email: form.email,
                    to_email: 'mohammedola1234@gmail.com',
                    message: form.message
                },
                "mT2sgjaTIqZVGX8gu"
            )
            setLoading(false)
            alert('You message has been successfully sent')

            setForm({
                name:'',
                email: '',
                message: '',
            })
        } catch (e) {
            setLoading(false)
            alert('I could not receive this message at this time, please try to contact me using other means, Thank you')
        }


    }
    return (
        <section className='c-space my-20' id='contact'>
            <h3 className='head-text'>
                Contact Me
            </h3>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 h-[800px]"/>
                <div className='contact-container'>
                    <h3 className='head-text'>
                        Let's talk
                    </h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Are you looking to build a new webapp or mobile app, improve your existing platform, payment
                        gateways or digital services, I'm here to help you
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="patrick@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I'm interested in..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
