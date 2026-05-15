import React from "react";
import girl from "./assets/girl.jpg";

import {
  Phone,
  MessageCircle,
  Mail,
  Bookmark,
} from "lucide-react";

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  button: string;
  href: string;
};

type BottomBoxProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          width: "620px",
          background:
            "linear-gradient(180deg, #16110b 0%, #090807 100%)",
          borderRadius: "30px",
          overflow: "hidden",
          border: "1px solid rgba(255,190,110,0.25)",
          boxShadow: "0 0 60px rgba(255,170,80,0.18)",
          color: "#fff",
        }}
      >
        {/* HERO IMAGE */}

        <div
          style={{
            position: "relative",
            height: "430px",
            backgroundImage: `url(${girl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        >
          {/* OVERLAY */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.7))",
            }}
          />
        </div>

        {/* LOWER SECTION */}

        <div style={{ padding: "20px" }}>
          <ContactCard
            icon={<Phone size={24} />}
            title="CALL"
            subtitle="+91 95356 24791"
            button="CALL NOW"
            href="tel:+919535624791"
          />

          <ContactCard
            icon={<MessageCircle size={24} />}
            title="WHATSAPP"
            subtitle="Chat With Me"
            button="CHAT NOW"
            href="https://wa.me/919535624791"
          />

          <ContactCard
            icon={<MessageCircle size={24} />}
            title="INSTAGRAM"
            subtitle="@sh.hh157"
            button="FOLLOW ME"
            href="https://instagram.com/sh.hh157"
          />

          <ContactCard
            icon={<Mail size={24} />}
            title="EMAIL"
            subtitle="anushaakivadi9@gmail.com"
            button="SEND MAIL"
            href="mailto:anushaakivadi9@gmail.com"
          />

          {/* SAVE CONTACT */}

          <div
            style={{
              marginTop: "16px",
              border: "1px solid rgba(255,190,110,0.15)",
              borderRadius: "24px",
              padding: "22px",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <BottomBox
              icon={<Bookmark size={26} />}
              title="SAVE CONTACT"
              text="Add instantly to your phone"
            />
          </div>

          {/* FOOTER */}

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "5px",
              fontSize: "12px",
              color: "#d2a05d",
              letterSpacing: "6px",
            }}
          >
            ✦ FUTURE READY ✦
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactCard = ({
  icon,
  title,
  subtitle,
  button,
  href,
}: ContactCardProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px",
        marginBottom: "16px",
        borderRadius: "24px",
        border: "1px solid rgba(255,190,110,0.18)",
        background: "rgba(255,255,255,0.02)",
        boxShadow: "0 0 20px rgba(255,170,80,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "1px solid rgba(255,220,160,0.25)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#f4cf98",
          }}
        >
          {icon}
        </div>

        <div>
          <div
            style={{
              fontSize: "12px",
              color: "#d6a768",
              letterSpacing: "2px",
            }}
          >
            {title}
          </div>

          <div
            style={{
              marginTop: "4px",
              color: "#f7e1c0",
              fontSize: "20px",
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <button
          style={{
            border: "1px solid rgba(255,200,120,0.2)",
            background: "rgba(255,180,90,0.06)",
            color: "#f6d6a8",
            padding: "16px 22px",
            borderRadius: "16px",
            fontSize: "14px",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
        >
          {button} →
        </button>
      </a>
    </div>
  );
};

const BottomBox = ({
  icon,
  title,
  text,
}: BottomBoxProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          border: "1px solid rgba(255,220,160,0.25)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#f4cf98",
          margin: "0 auto 14px auto",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          color: "#f2c98c",
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          marginTop: "6px",
          color: "#d6c4a8",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        {text}
      </div>
    </div>
  );
};