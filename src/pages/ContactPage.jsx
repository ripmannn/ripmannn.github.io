import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [pertanyaan, setPertanyaan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Halo, nama saya ${name}. Saya ingin bertanya: ${pertanyaan}`;
    const phoneNumber = "6285694265691";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");

    // Clear the input fields after submission
    setName("");
    setPertanyaan("");
  };
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">Contact Me</h1>
          <p className="text-justify">
            Jika Anda memiliki pertanyaan, saran, atau ingin berdiskusi, jangan ragu untuk menghubungi saya. Saya akan dengan senang hati menjawab setiap pesan Anda secepat mungkin. Silahkan gunakan salah satu cara kontak di bawah ini atau
            kirim pertanyaan Anda melalui formulir di
            <span className="md:hidden">bawah ini.</span>
            <span className="hidden md:block">sebelah kanan.</span>
          </p>
          <div className="flex flex-wrap gap-2">
            <a href="mailto:Rahmanarief111@gmail.com" className="btn">
              <Mail size={20} />
              <span>rahmanarief111@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/ripmannn/" className="btn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
              <span>ripmannn</span>
            </a>
            <a href="https://github.com/ripmannn" className="btn" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              <span>ripmannn</span>
            </a>
          </div>
        </div>
        <div className="card bg-base-200 h-fit">
          <form className="card-body" onSubmit={handleSubmit}>
            <h3 className="card-title">Contact Me</h3>
            <div className="py-4 space-y-2">
              <input type="text" className="input w-full" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama dan email anda" required />
              <textarea required type="text" className="textarea w-full" placeholder="Pertanyaan atau diskusi anda" value={pertanyaan} onChange={(e) => setPertanyaan(e.target.value)} rows={5}></textarea>
            </div>

            <div className="card-actions">
              <button className="btn btn-primary">
                <Send size={20} />
                <span>Kirim Pertanyaan</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
