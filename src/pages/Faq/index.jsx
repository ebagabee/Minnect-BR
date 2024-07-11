import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Question from "../../components/Question";
import { useEffect } from "react";
import './faq.css'

function Faq() {
    useEffect(() => {
        document.title = 'FAQ - Minnect';
      }, []);

    return (
        <>
            <Header/>
            <div className="container-faq">
                <h1 className="faq-title">Confira as respostas às perguntas frequentes</h1>

                <div className="faq-buttons">
                    <Button content="Questoes Gerais" width="100%" radius="28px" height="90px" color="#fff" weight="700" background="#45908fbb"/>
                    <Button content="Perguntas de Especialistas" width="100%" radius="28px" height="90px" color="#fff" weight="700" background="#45908fbb"/>
                    <Button content="Questoes de Usuarios" width="100%" radius="28px" height="90px" color="#fff" weight="700" background="#45908fbb"/>
                </div>

                <div className="faq-general">
                    <div className="first">
                        <Question
                            title="Perguntas gerais"
                            number="1"
                            text="Em quais países o Minnect está disponível"
                            answer="O aplicativo Minnect está disponível apenas nos EUA e Canadá. Se você estiver em qualquer outro lugar, não conseguirá fazer o download ou o aplicativo não funcionará corretamente. Estamos trabalhando ativamente para lançar o aplicativo em outros países. Você pode enviar seu e-mail no formulário abaixo e assim que o Minnect estiver disponível no país selecionado iremos notificá-lo."
                        />
                    </div>

                    <div className="second">
                        <Question
                            title="Perguntas de Especialistas"
                            number="1"
                            text="Estou tendo problemas para conectar minha conta bancária"
                            answer="Você pode direcionar todas as dúvidas relacionadas à vinculação de contas bancárias ao nosso parceiro Stripe. Encontre respostas para suas perguntas no site da Stripe."
                        />
                        <Question
                            number="2"
                            text="Posso reagendar uma chamada se minha programação mudar?"
                            answer="Entendemos que você está ocupado e sua agenda muda. Você pode reagendar qualquer ligação indo ao evento. No evento, você verá um ícone de calendário. Toque no ícone e selecione reagendar no menu que aparece. Siga as etapas para selecionar um novo horário para a chamada e escreva uma mensagem ao usuário explicando por que deseja reagendar. Você pode reagendar uma chamada até 24 horas antes do horário de início. Caso o usuário recuse o novo horário, a chamada será automaticamente cancelada e o usuário será reembolsado."
                        />

                        <Question
                            number="3"
                            text="Como defino minha disponibilidade?"
                            answer="Você pode definir sua disponibilidade na tela de configurações especializadas. Existe um item de configuração chamado “Disponibilidade”. Toque nele para escolher em quais horas e dias você deseja permitir que os usuários agendem chamadas com você."
                        />

                        <Question
                            number="4"
                            text="Qual percentual dos ganhos a plataforma obtém?"
                            answer="20% por transação. Os especialistas ficam com 80%."
                        />
                    </div>

                    <div className="thirth">
                        <Question
                            title="Perguntas de Usuários"
                            number="1"
                            text="Serei cobrado quando agendar uma ligação com um especialista ou fizer uma pergunta?"
                            answer="Quando você agenda uma ligação com um especialista ou faz uma pergunta, sua forma de pagamento é autorizada por um período de 5 dias. Durante esse período, se o especialista aceitar o seu pedido de reserva ou responder à sua pergunta, os fundos autorizados serão transferidos. Se a solicitação expirar, a autorização será removida."
                        />

                        <Question
                            number="2"
                            text="Como faço para criar uma conta?"
                            answer="Baixe o aplicativo na Apple App Store ou Google Play Store. Na tela de login você verá um botão que diz “Cadastre-se” abaixo do botão “Login”"
                        />

                        <Question
                            number="3"
                            text="Como posso me tornar um especialista?"
                            answer="Qualquer usuário pode se inscrever como especialista. Você pode ir para Configurações, onde verá a seção “Torne-se um especialista”. Toque nele para entrar no processo de configuração da conta. Depois de concluir o processo, você será um especialista!"
                        />

                        <Question
                            number="4"
                            text="Quantos dias um especialista tem para responder à minha pergunta?"
                            answer="Um especialista tem 5 dias para responder sua pergunta. Se eles não responderem sua pergunta nesse prazo, sua forma de pagamento não será cobrada."
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Faq;