import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Foto1 from "./Foto_1.jpg";
import Foto2 from "./Foto_2.jpg";
import Foto3 from "./Foto_3.jpg";
import Post1 from "./Post_1.jpg";
import Post2 from "./Post_2.jpg";
import Post4 from "./Post_4.jpg";
import Foto4 from "./Foto_4.jpg";
import Post5 from "./Post_5.jpg";
import Foto8 from "./Foto_8.jpg";
import Foto5 from "./Foto_5.jpg";
import Foto6 from "./Foto_6.jpg";
import Post6 from "./Post_6.jpg";


// -----------------------------------------------
// COMPONENTES COM ANIMAÇÃO
// -----------------------------------------------
function FadeIn({ children, delay = 0 }) {
  return (
    <div
      style={{
        opacity: 0,
        animation: `fadeIn 1.2s ease forwards`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// -----------------------------------------------
// PÁGINA 1
// -----------------------------------------------
function Home() {
  return (
    <div
      style={{
        minHeight: "200vh",
        width: "100%",
        padding: "40px",
        background: "linear-gradient(135deg, #0A1A2F, #0F2E3D, #1B1C1F)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite",
        color: "#E8E8E8",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* --------------------------------------
          ELEMENTOS DECORATIVOS DE FUNDO
         -------------------------------------- */}
      {/* FIGURINHAS DE FUNDO — agora reforçadas e em maior quantidade */}
<div style={{
  position: "absolute",
  top: "12%",
  left: "18%",
  fontSize: "52px",
  opacity: 0.13,
  transform: "rotate(-20deg)",
  pointerEvents: "none",
}}>❤️</div>

<div style={{
  position: "absolute",
  top: "22%",
  right: "15%",
  fontSize: "50px",
  opacity: 0.13,
  transform: "rotate(18deg)",
  pointerEvents: "none",
}}>✨</div>

<div style={{
  position: "absolute",
  top: "55%",
  left: "10%",
  fontSize: "60px",
  opacity: 0.12,
  transform: "rotate(12deg)",
  pointerEvents: "none",
}}>💲</div>

<div style={{
  position: "absolute",
  top: "75%",
  right: "18%",
  fontSize: "48px",
  opacity: 0.15,
  transform: "rotate(-12deg)",
  pointerEvents: "none",
}}>📄</div>

{/* ADICIONANDO MAIS ELEMENTOS — repetição proposital */}
<div style={{
  position: "absolute",
  top: "38%",
  left: "55%",
  fontSize: "46px",
  opacity: 0.12,
  transform: "rotate(25deg)",
  pointerEvents: "none",
}}>⭐</div>

<div style={{
  position: "absolute",
  top: "65%",
  right: "40%",
  fontSize: "44px",
  opacity: 0.14,
  transform: "rotate(8deg)",
  pointerEvents: "none",
}}>✨</div>

<div style={{
  position: "absolute",
  top: "82%",
  left: "25%",
  fontSize: "50px",
  opacity: 0.14,
  transform: "rotate(-15deg)",
  pointerEvents: "none",
}}>❤️</div>

<div style={{
  position: "absolute",
  top: "45%",
  right: "25%",
  fontSize: "58px",
  opacity: 0.14,
  transform: "rotate(10deg)",
  pointerEvents: "none",
}}>💲</div>

<div style={{
  position: "absolute",
  top: "30%",
  right: "48%",
  fontSize: "40px",
  opacity: 0.12,
  transform: "rotate(3deg)",
  pointerEvents: "none",
}}>📄</div>


      {/* --------------------------------------
          POST-ITS NOS CANTOS
         -------------------------------------- */}

      {/* POST-IT ESQUERDA — puxado para dentro */}
<img
  src={Post1}
  style={{
    position: "absolute",
    top: "290px",
    left: "320px",          // puxado para o centro
    width: "200px",
    borderRadius: "10px",
    opacity: 0.93,
    transform: "rotate(-8deg)",
    boxShadow: "0 14px 28px rgba(0,0,0,0.45)",
    pointerEvents: "none",
  }}
/>

{/* POST-IT DIREITA — puxado para dentro */}
<img
  src={Post2}
  style={{
    position: "absolute",
    top: "990px",
    right: "310px",         // puxado para o centro
    width: "230px",
    borderRadius: "10px",
    opacity: 0.93,
    transform: "rotate(8deg)",
    boxShadow: "0 14px 28px rgba(0,0,0,0.45)",
    pointerEvents: "none",
  }}
/>


      {/* --------------------------------------
          CONTAINER CENTRAL DE VERDADE
         -------------------------------------- */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // ← AGORA SIM, CENTRALIZA TUDO!
        }}
      >

        {/* TÍTULO */}
        <FadeIn delay={0.3}>
          <h1
            style={{
              fontSize: "34px",
              marginBottom: "25px",
              textAlign: "center",
              textShadow: "0 0 12px rgba(255,255,255,0.15)",
            }}
          >
            Algumas coisas que eu queria te dizer...
          </h1>
        </FadeIn>

        {/* TEXTO 1 */}
        <FadeIn delay={0.6}>
          <p
            style={{
              maxWidth: "640px",
              fontSize: "20px",
              marginBottom: "40px",
              lineHeight: "1.7",
              background: "rgba(255,255,255,0.05)",
              padding: "22px",
              borderRadius: "10px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
              transform: "translateX(40px) rotate(1.5deg)",
            }}
          >
            Neste mais de um ano que te conheço, compartilhamos momentos incríveis,
          momentos que ficarão eternizados no meu coração.  
          Você é uma pessoa incrível, com um sorriso contagiante; é impossível
          ficar triste com a sua companhia.
          </p>
        </FadeIn>

        {/* FOTO 1 */}
        <FadeIn delay={0.9}>
          <img
            src={Foto1}
            style={{
              width: "320px",
              borderRadius: "15px",
              marginBottom: "50px",
              transform: "rotate(-2.5deg)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.55)",
            }}
          />
        </FadeIn>

        {/* TEXTO 2 */}
        <FadeIn delay={1.2}>
          <p
            style={{
              maxWidth: "640px",
              fontSize: "20px",
              marginBottom: "40px",
              lineHeight: "1.7",
              background: "rgba(255,255,255,0.05)",
              padding: "22px",
              borderRadius: "10px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
              transform: "translateX(-40px) rotate(-1.5deg)",
            }}
          >
            Sempre nos apoiamos quando precisamos. Sempre estamos presentes quando um
          precisa do outro. Sempre fazemos o outro rir, mesmo nos dias difíceis.  
          Sinto que a nossa química é algo único, especial de um jeito que nem dá
          para explicar direito.

          </p>
        </FadeIn>

        {/* FOTO 2 */}
        <FadeIn delay={1.5}>
          <img
            src={Foto2}
            style={{
              width: "320px",
              borderRadius: "15px",
              marginBottom: "60px",
              transform: "rotate(2deg)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.55)",
            }}
          />
        </FadeIn>

        {/* TEXTO 3 */}
        <FadeIn delay={1.8}>
          <p
            style={{
              maxWidth: "640px",
              fontSize: "20px",
              marginBottom: "40px",
              lineHeight: "1.7",
              background: "rgba(255,255,255,0.05)",
              padding: "22px",
              borderRadius: "10px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
              transform: "translateX(40px) rotate(1.5deg)",
            }}
          >
            Adoro todos seus traços e jeito de ser.
            Quero continuar compartilhando muitos momentos contigo, Jujuba.  
          Obrigado por tudo. 💙
          </p>
        </FadeIn>

        {/* BOTÃO */}
        <FadeIn delay={2.1}>
          <Link
            to="/mensagem"
            style={{
              padding: "16px 28px",
              background: "#1B1C1F",
              color: "white",
              borderRadius: "10px",
              fontSize: "18px",
              textDecoration: "none",
              boxShadow: "0 5px 12px rgba(0,0,0,0.5)",
            }}
          >
            Continuar →
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}

// -----------------------------------------------
// PÁGINA 2 COM EFEITO DE DIGITAÇÃO
// -----------------------------------------------
function Mensagem() {
  return (
    <div
      style={{
        minHeight: "150vh",
        width: "100%",
        padding: "40px",
        background: "linear-gradient(135deg, #0A1A2F, #0F2E3D, #1B1C1F)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite",
        color: "#E8E8E8",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* ------------------------------
          FIGURINHAS DE FUNDO
      ------------------------------ */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "18%",
        fontSize: "52px",
        opacity: 0.13,
        transform: "rotate(-15deg)",
        pointerEvents: "none",
      }}>✨</div>

      <div style={{
        position: "absolute",
        top: "25%",
        right: "12%",
        fontSize: "60px",
        opacity: 0.15,
        transform: "rotate(12deg)",
        pointerEvents: "none",
      }}>❤️</div>

      <div style={{
        position: "absolute",
        top: "55%",
        left: "10%",
        fontSize: "58px",
        opacity: 0.14,
        transform: "rotate(20deg)",
        pointerEvents: "none",
      }}>💲</div>

      <div style={{
        position: "absolute",
        top: "78%",
        right: "18%",
        fontSize: "45px",
        opacity: 0.13,
        transform: "rotate(-18deg)",
        pointerEvents: "none",
      }}>📄</div>

      <div style={{
        position: "absolute",
        top: "40%",
        right: "45%",
        fontSize: "48px",
        opacity: 0.12,
        transform: "rotate(-2deg)",
        pointerEvents: "none",
      }}>⭐</div>

      <div style={{
        position: "absolute",
        top: "70%",
        left: "30%",
        fontSize: "48px",
        opacity: 0.13,
        transform: "rotate(8deg)",
        pointerEvents: "none",
      }}>✨</div>

      {/* ------------------------------
          POST-ITS NOS CANTOS
      ------------------------------ */}
      <img
  src={Post4}
  style={{
    position: "absolute",
    top: "290px",
    left: "320px",          // puxado para o centro
    width: "370px",
    borderRadius: "10px",
    opacity: 0.93,
    transform: "rotate(-8deg)",
    boxShadow: "0 14px 28px rgba(0,0,0,0.45)",
    pointerEvents: "none",
  }}
/>

{/* POST-IT DIREITA — puxado para dentro */}
<img
  src={Foto4}
  style={{
    position: "absolute",
    top: "760px",
    right: "310px",         // puxado para o centro
    width: "500px",
    borderRadius: "10px",
    opacity: 0.93,
    transform: "rotate(8deg)",
    boxShadow: "0 14px 28px rgba(0,0,0,0.45)",
    pointerEvents: "none",
  }}
/>

      {/* ------------------------------
          CONTEÚDO CENTRAL
      ------------------------------ */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        {/* TÍTULO DA PÁGINA 2 */}
        <FadeIn delay={0.3}>
          <h1
            style={{
              fontSize: "30px",
              marginBottom: "25px",
              textAlign: "center",
              textShadow: "0 0 12px rgba(255,255,255,0.15)",
              color: "#E8E8E8",
            }}
          >
            Segunda parte do presente 💙
          </h1>
        </FadeIn>

        {/* TEXTO 1 */}
        <FadeIn delay={0.6}>
          <p
            style={{
              maxWidth: "650px",
              fontSize: "20px",
              marginBottom: "35px",
              lineHeight: "1.7",
              background: "rgba(255,255,255,0.05)",
              padding: "22px",
              borderRadius: "10px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
              transform: "translateX(35px) rotate(1deg)",
            }}
          >
            Para a segunda parte, eu queria dedicar algumas palavras à pessoa incrível que você é, em específico profissionalmente.  
          Você tem uma capacidade única de alegrar o dia de qualquer um, sempre pensando no próximo  
          e sendo alguém em quem todo mundo — não só eu — pode contar.  
          Seu coração é enorme.
          </p>
        </FadeIn>

        {/* FOTO ESPECIAL (Foto_3.jpg) */}
        <FadeIn delay={1.0}>
          <img
            src={Foto3}
            style={{
              width: "350px",
              borderRadius: "16px",
              marginBottom: "45px",
              transform: "rotate(-2deg)",
              boxShadow: "0 12px 28px rgba(0,0,0,0.5)",
            }}
          />
        </FadeIn>

        {/* TEXTO 2 */}
        <FadeIn delay={1.3}>
          <p
            style={{
              maxWidth: "650px",
              fontSize: "20px",
              marginBottom: "35px",
              lineHeight: "1.7",
              background: "rgba(255,255,255,0.05)",
              padding: "22px",
              borderRadius: "10px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
              transform: "translateX(-35px) rotate(-1deg)",
            }}
          >
            Mesmo com a correria da rotina, a gente sempre dá um jeito de se entender,  
          e é muito nítido o quanto você é profissional, dedicada e um exemplo  
          para quem está ao seu redor — inclusive para mim.
          </p>
        </FadeIn>

        {/* TEXTO 3 */}
        <FadeIn delay={1.6}>
          <p
            style={{
              maxWidth: "650px",
              fontSize: "20px",
              marginBottom: "45px",
              lineHeight: "1.7",
              background: "rgba(255,255,255,0.05)",
              padding: "22px",
              borderRadius: "10px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
              transform: "translateX(28px) rotate(1deg)",
            }}
          >
           É um orgulho dividir o mesmo espaço com você e estar ao seu lado,  
          não só profissionalmente, mas casualmente também.  
          Eu só queria enaltecer o quanto eu te admiro  
          e o quanto gosto do seu jeito de ser.  
          (Viva Agrivalle! haha)
          </p>
        </FadeIn>

        {/* BOTÃO PARA A TERCEIRA PÁGINA */}
        <FadeIn delay={2.0}>
          <Link
            to="/amizades"
            style={{
              padding: "16px 32px",
              background: "#1B1C1F",
              color: "white",
              borderRadius: "10px",
              fontSize: "18px",
              textDecoration: "none",
              boxShadow: "0 5px 12px rgba(0,0,0,0.5)",
              transition: "0.3s",
            }}
          >
            Continuar →
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}

// -----------------------------------------------
// PÁGINA 3 - Amizades
// -----------------------------------------------

function Amizades() {
  return (
    <div
      style={{
        minHeight: "150vh",
        width: "100%",
        padding: "40px",
        background: "linear-gradient(135deg, #0A1A2F, #0F2E3D, #1B1C1F)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite",
        color: "#E8E8E8",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* FIGURINHAS DE FUNDO */}
      <div style={{ position: "absolute", top: "12%", left: "18%", fontSize: "52px", opacity: 0.13, transform: "rotate(-15deg)", pointerEvents: "none" }}>✨</div>
      <div style={{ position: "absolute", top: "25%", right: "12%", fontSize: "60px", opacity: 0.15, transform: "rotate(12deg)", pointerEvents: "none" }}>❤️</div>
      <div style={{ position: "absolute", top: "55%", left: "10%", fontSize: "58px", opacity: 0.14, transform: "rotate(20deg)", pointerEvents: "none" }}>💲</div>
      <div style={{ position: "absolute", top: "78%", right: "18%", fontSize: "45px", opacity: 0.13, transform: "rotate(-18deg)", pointerEvents: "none" }}>📄</div>
      <div style={{ position: "absolute", top: "40%", right: "45%", fontSize: "48px", opacity: 0.12, transform: "rotate(-2deg)", pointerEvents: "none" }}>⭐</div>

      {/* POST-ITS NOS CANTOS */}
      <img src={Post6} style={{
        position: "absolute", top: "250px", left: "250px",
        width: "320px", borderRadius: "10px", opacity: 0.92,
        transform: "rotate(-7deg)", boxShadow: "0 14px 28px rgba(0,0,0,0.45)",
        pointerEvents: "none"
      }}/>

      <img src={Foto6} style={{
        position: "absolute", top: "1000px", right: "250px",
        width: "320px", borderRadius: "10px", opacity: 0.92,
        transform: "rotate(5deg)", boxShadow: "0 14px 28px rgba(0,0,0,0.45)",
        pointerEvents: "none"
      }}/>

      {/* CONTEÚDO CENTRAL */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

        <FadeIn delay={0.3}>
          <h1 style={{
            fontSize: "30px", marginBottom: "25px", textAlign: "center",
            textShadow: "0 0 12px rgba(255,255,255,0.15)", color: "#E8E8E8"
          }}>
            Uma outra parte importante dessa caminhada 💙
          </h1>
        </FadeIn>

        {/* TEXTO 1 */}
        <FadeIn delay={0.6}>
          <p style={{
            maxWidth: "650px", fontSize: "20px", marginBottom: "35px",
            lineHeight: "1.7", background: "rgba(255,255,255,0.05)",
            padding: "22px", borderRadius: "10px", boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
            transform: "translateX(35px) rotate(1deg)"
          }}>
            Ao longo desse tempo, a gente construiu amizades que guardo com muito carinho.
            Pessoas com quem compartilhei risadas, conversas e momentos que realmente marcaram.
          </p>
        </FadeIn>

        {/* FOTO ENTRE BLOCO 1 e 2 → Foto_8 */}
        <FadeIn delay={0.85}>
          <img
            src={Foto8}
            style={{
              width: "400px",
              borderRadius: "14px",
              marginBottom: "45px",
              transform: "rotate(-2deg)",
              boxShadow: "0 12px 28px rgba(0,0,0,0.5)",
            }}
          />
        </FadeIn> 

        {/* TEXTO 2 */}
        <FadeIn delay={1.0}>
          <p style={{
            maxWidth: "650px", fontSize: "20px", marginBottom: "35px",
            lineHeight: "1.7", background: "rgba(255,255,255,0.05)",
            padding: "22px", borderRadius: "10px", boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
            transform: "translateX(-35px) rotate(-1deg)"
          }}>
            E por mais que você sempre roube a cena quando estamos em grupo
            (e sabe MUITO bem disso ), é sempre especial sair todo mundo junto,
            ainda mais quando você está por perto.
          </p>
        </FadeIn>

        {/* TEXTO 3 */}
        <FadeIn delay={1.4}>
          <p style={{
            maxWidth: "650px", fontSize: "20px", marginBottom: "40px",
            lineHeight: "1.7", background: "rgba(255,255,255,0.05)",
            padding: "22px", borderRadius: "10px", boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
            transform: "translateX(30px) rotate(1deg)"
          }}>
            A empresa me apresentou pessoas incríveis, gente que admiro de verdade
            e que me ensina algo novo todos os dias. Sou grato por cada uma delas.
          </p>
        </FadeIn>

        {/* FOTO ENTRE BLOCO 3 e 4 → Foto_5 */}
        <FadeIn delay={1.65}>
          <img
            src={Foto5}
            style={{
              width: "400px",
              borderRadius: "14px",
              marginBottom: "45px",
              transform: "rotate(2deg)",
              boxShadow: "0 12px 28px rgba(0,0,0,0.5)",
            }}
          />
        </FadeIn>

        {/* TEXTO 4 — PRINCIPAL */}
        <FadeIn delay={1.9}>
          <p style={{
            maxWidth: "650px", fontSize: "20px", marginBottom: "50px",
            lineHeight: "1.7", background: "rgba(255,255,255,0.05)",
            padding: "22px", borderRadius: "10px", boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
            transform: "translateX(-30px) rotate(-1deg)"
          }}>
            Mas, sinceramente… se eu tivesse que escolher uma pessoa desse caminho
            todo para levar comigo para o resto da vida, sem nenhuma dúvida seria você.
          </p>
        </FadeIn>

        {/* BOTÃO */}
        <FadeIn delay={2.2}>
          <Link
            to="/senha"
            style={{
              padding: "16px 32px",
              background: "#1B1C1F",
              color: "white",
              borderRadius: "10px",
              fontSize: "18px",
              textDecoration: "none",
              boxShadow: "0 5px 12px rgba(0,0,0,0.5)",
            }}
          >
            Continuar →
          </Link>
        </FadeIn>

      </div>
    </div>
  );
}


// -----------------------------------------------
// PÁGINA 4 — SENHA
// -----------------------------------------------
function Senha() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const [acertou, setAcertou] = useState(false);

  const CORRETA = "notafiscal";

  function validar() {
    if (senha.toLowerCase().trim() === CORRETA) {
      setErro(false);
      setAcertou(true);
      setTimeout(() => {
        window.location.href = "/presente";
      }, 1700);
    } else {
      setErro(true);
    }
  }

  return (
    <div
      style={{
        minHeight: "120vh",
        width: "100%",
        padding: "40px",
        background: "linear-gradient(135deg, #0A1A2F, #0F2E3D, #1B1C1F)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite",
        color: "#E8E8E8",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* FIGURINHAS DE FUNDO */}
      <div style={{
        position: "absolute",
        top: "18%",
        left: "18%",
        fontSize: "60px",
        opacity: 0.12,
        transform: "rotate(-10deg)",
        pointerEvents: "none",
      }}>✨</div>

      <div style={{
        position: "absolute",
        top: "35%",
        right: "14%",
        fontSize: "55px",
        opacity: 0.12,
        transform: "rotate(10deg)",
        pointerEvents: "none",
      }}>❤️</div>

      <div style={{
        position: "absolute",
        top: "60%",
        left: "8%",
        fontSize: "58px",
        opacity: 0.12,
        pointerEvents: "none",
      }}>💲</div>

      <div style={{
        position: "absolute",
        top: "75%",
        right: "20%",
        fontSize: "50px",
        opacity: 0.10,
        transform: "rotate(-15deg)",
        pointerEvents: "none",
      }}>📄</div>


      {/* CONTEÚDO CENTRAL */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "120px",
          transition: "0.4s",
          transform: acertou ? "scale(1.07)" : "scale(1)",
        }}
      >

        <h1
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            textAlign: "center",
            color: "#E8E8E8",
          }}
        >
          Quase lá...
        </h1>

        <p
          style={{
            maxWidth: "480px",
            textAlign: "center",
            opacity: 0.8,
            marginBottom: "25px",
            fontSize: "18px",
          }}
        >
          Para abrir seu presente final, digite a senha secreta:
        </p>

        <input
          type="password"
          placeholder="Digite a senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{
            width: "280px",
            padding: "14px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            marginBottom: "12px",
            background: "rgba(255,255,255,0.1)",
            color: "white",
            boxShadow: erro
              ? "0 0 12px rgba(255,80,80,0.45)"
              : "0 0 12px rgba(0,0,0,0.4)",
            transition: "0.3s",
          }}
        />

        {erro && (
          <p style={{ color: "#ff6b6b", marginBottom: "10px", fontSize: "16px" }}>
            Senha incorreta 😅
          </p>
        )}

        {acertou && (
          <p
            style={{
              color: "#6df7ff",
              marginBottom: "10px",
              fontSize: "18px",
              animation: "pulse 1s infinite",
            }}
          >
            ✔ Senha correta!
          </p>
        )}

        <button
          onClick={validar}
          style={{
            marginTop: "10px",
            padding: "12px 26px",
            background: "#1B1C1F",
            color: "white",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 5px 12px rgba(0,0,0,0.5)",
            transition: "0.3s",
          }}
        >
          Abrir presente 🎁
        </button>

        {/* DICA DA SENHA */}
<div
  style={{
    marginTop: "35px",
    fontSize: "18px",
    color: "rgba(255,255,255,0.75)",
    maxWidth: "520px",
    lineHeight: "1.6",
    textAlign: "center",
    background: "rgba(255,255,255,0.06)",
    padding: "18px 22px",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
    backdropFilter: "blur(4px)",
  }}
>
  <strong>Uma dica:</strong> no nosso dia a dia,
  oque sempre te dou trabalho.  
  E, duvidosamente, é uma parte da área que você quis seguir. 
</div>


        {acertou && (
          <div
            style={{
              fontSize: "58px",
              marginTop: "25px",
              animation: "pulse 1.2s infinite",
            }}
          >
            💙
          </div>
        )}
      </div>
    </div>
  );
}

// -----------------------------------------------
// PÁGINA FINAL
// -----------------------------------------------
function Presente() {
  return (
    <div
      style={{
        minHeight: "120vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0A1A2F, #0F2E3D, #1B1C1F)",
        color: "white",
        padding: "30px",
        animation: "fadeIn 2s ease",
      }}
    >

      <div style={{
        background: "rgba(255,255,255,0.08)",
        padding: "30px",
        borderRadius: "14px",
        maxWidth: "650px",
        textAlign: "center",
        boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
        transform: "scale(0.7)",
        animation: "openLetter 1.4s forwards",
      }}>
        <h1 style={{ marginBottom: "20px", fontSize: "26px" }}>
          Seu presente final 💙
        </h1>

        <p style={{ lineHeight: "1.6", marginBottom: "20px", fontSize: "18px" }}>
          Esse presente sei que vai significar muito pra você.
          <br /><br />
          Fiz tudo isso, com mt carinho, mas sei que você merece muito mais.
          <br />
          Obrigado por tudo! Espero que tenha gostado.
        </p>

        
        
      </div>

      <p style={{ marginTop: "25px", opacity: 0.7 }}>
        Obrigado por ser você. 💙  
      </p>
    </div>
  );
}


//Introdução -------------
//------------------------
//------------------------

function Introducao() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #0A1A2F, #0F2E3D, #1B1C1F)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 10s ease infinite",
        color: "#E8E8E8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* FIGURINHAS DE FUNDO BEM SUAVES */}
      <div style={{
        position: "absolute",
        top: "22%",
        left: "18%",
        fontSize: "60px",
        opacity: 0.10,
        transform: "rotate(-10deg)",
      }}>✨</div>

      <div style={{
        position: "absolute",
        top: "60%",
        right: "14%",
        fontSize: "55px",
        opacity: 0.10,
        transform: "rotate(15deg)",
      }}>💙</div>

      <div style={{
        position: "absolute",
        top: "40%",
        left: "5%",
        fontSize: "48px",
        opacity: 0.10,
      }}>⭐</div>

      {/* TÍTULO */}
      <h1
        style={{
          fontSize: "38px",
          marginBottom: "20px",
          animation: "fadeIn 1.4s ease forwards",
        }}
      >
        Para começar...
      </h1>

      {/* SUBTÍTULO / TEXTO INTRODUTÓRIO */}
      <p
        style={{
          maxWidth: "580px",
          fontSize: "20px",
          lineHeight: "1.6",
          opacity: 0,
          animation: "fadeIn 2.2s ease forwards",
          animationDelay: "0.6s",
        }}
      >
        Preparei algo especial pra você.  
        Algo simples, mas feito com carinho, do jeitinho que você merece.
      </p>

      {/* BOTÃO PARA COMEÇAR */}
      <Link
        to="/Home"
        style={{
          marginTop: "40px",
          padding: "14px 36px",
          background: "#1B1C1F",
          color: "white",
          borderRadius: "10px",
          fontSize: "18px",
          textDecoration: "none",
          boxShadow: "0 5px 14px rgba(0,0,0,0.5)",
          opacity: 0,
          animation: "fadeIn 2.5s ease forwards",
          animationDelay: "1.2s",
        }}
      >
        Entrar →
      </Link>
    </div>
  );
}


// -----------------------------------------------
// ROTAS
// -----------------------------------------------
export default function App() {
  return (
    <Routes>

      {/* Rota inicial */}
      <Route path="/" element={<Introducao />} />

      {/* Demais páginas */}
      <Route path="/home" element={<Home />} />
      <Route path="/mensagem" element={<Mensagem />} />
      <Route path="/amizades" element={<Amizades />} />
      <Route path="/senha" element={<Senha />} />
      <Route path="/presente" element={<Presente />} />
    </Routes>
  );
}

