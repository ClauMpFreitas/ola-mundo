<<<<<<< HEAD
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
        minhas habilidades tanto no desenvolvimento back-end quanto front-end.
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
=======
import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Antônio!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Instituto Federal do Piauí (IFPI), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Engenharia Elétrica na Universidade Federal do Piauí (UFPI). Lá eu consegui entrar no PET (Programa de Educação Tutorial), um grupo acadêmico que contribui de diversas formas para o curso. Lá eu tive a oportunidade de estudar desenvolvimento web para ser um dos mantenedores do site deles.
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
            </p>
            <p className={styles.paragrafo}>
                E foi enquanto eu estava no PET que decidi procurar um estágio em desenvolvimento web. Eu encontrei uma vaga na Alura para o Scuba Team e percebi que ela aliava duas paixões minhas: programação e educação. Para minha felicidade, fui escolhido para fazer parte do time.

            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
            </p>
        </PostModelo>
    )
}
>>>>>>> origin/master
