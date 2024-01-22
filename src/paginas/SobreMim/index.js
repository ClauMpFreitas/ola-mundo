import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou a Cláudia!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto da Cláudia sorrindo"
        className={styles.fotoSobreMim}
      ></img>
      <p className={styles.paragrafo}>
        Sou uma programadora dedicada e sempre pronta para desbravar novos
        desafios no vasto universo da tecnologia. Iniciei minha jornada como
        auxiliar administrativa, dominando habilidades como atendimento
        telefônico, digitação e arquivamento. No entanto, meu coração bate forte
        mesmo é pela programação.
      </p>
      <p className={styles.paragrafo}>
        Com bagagem em programação desktop e multiplataforma, descobri que não
        há limites para o que podemos criar com linhas de código. Minha jornada
        profissional também me levou a explorar os fascinantes sistemas de
        informação em saúde.
      </p>
      <p className={styles.paragrafo}>
        Estou constantemente em busca de novos conhecimentos para aprimorar
<<<<<<< HEAD
        minhas habilidades tanto no desenvolvimento front-end quanto back-end.
=======
        minhas habilidades tanto no desenvolvimento back-end quanto front-end.
>>>>>>> 38a7fb0af91683361f9635ad448df73d43396d6d
        Acredito que a programação é como uma arte digital, onde posso expressar
        minha criatividade e resolver problemas de forma única. Meu objetivo?
        Continuar aprendendo e me aprofundando nesse incrível universo da
        programação. Não estou apenas buscando um trabalho, mas sim uma jornada
        de aprendizado contínuo.
      </p>
      <p className={styles.paragrafo}>
        Se você é apaixonado(a) por códigos quanto eu e está sempre em busca de
        inovação e conhecimento, ficarei feliz em compartilhar essa jornada e
        aprender juntos! Vamos codar e explorar novos horizontes! ✨🚀
      </p>
    </PostModelo>
  );
}
