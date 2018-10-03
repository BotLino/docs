
# Histórico de Revisão

| Data       | Versão | Modificação                                     | Autor                         |
| :--------- | :----- | :---------------------------------------------- | :---------------------------- |
| 30/08/2018 | 1.0    | Criação do documento e adição do tópico 1       | Pedro Rodrigues               |
| 31/09/2018 | 1.1    | Adição do tópico 5                              | Matheus Blanco                |
| 04/09/2018 | 1.2    | Adição do tópico 2                              | Gabriel Braga, Matheus Blanco |
| 05/09/2018 | 1.3    | Adição dos tópicos 2.2                          | Matheus Blanco, Gabriel Braga |
| 05/09/2018 | 1.4    | Adição do tópico 3                              | Gabriel Filipe                |
| 06/09/2018 | 1.5    | Atualiza tópicos 1 e 3                          | Matheus Blanco                |
| 06/09/2018 | 1.6    | Revisão do Diagrama de Relações e do tópico 2.1 | Matheus Blanco, Gabriel Braga |
| 07/09/2018 | 1.6    | Revisão do tópico 2.1                           | Matheus Blanco                |

#### 1. Introdução  

<p  align="justify">  &emsp;&emsp;Este documento visa apresentar a arquitetura de software aplicada no desenvolvimento do ChatBot Lino, garantindo uma facilidade de visualização dos requisitos e da estrutura para com os desenvolvedores.</p>

##### 1.1 Finalidade  

<p  align="justify">  &emsp;&emsp; Ao esboçar uma visão ampla da arquitetura do ChatBot, é possível esboçar seus aspectos. Sendo assim, nesse documento buscaremos transparecer as decisões arquiteturais que foram tomadas em relação ao Bot Lino.</p>

##### 1.2 Escopo

<p  align="justify">  &emsp;&emsp;O Lino tem como principal objetivo servir a comunidade do Campus do Gama da UnB(FGA) à partir da utilização de tecnologias de fluxo de conversa, pesquisa na internet e bancos de dados. O Lino servirá como um assistente para a comunidade, enviando alertas, novidades e e-mails, além de ser capaz de informar aos alunos certos procedimentos para retirada de documentos.</p>

##### 1.3 Visão Geral

<p  align="justify">  &emsp;&emsp;O documento através de 4 principais tópicos e suas ramificações visa detalhar a arquitetura e os requisitos do software. Facilitando o desenvolvimento e esclarecendo dúvidas.</p>

Estrutura do documento:  

<ul>

<li> Introdução; </li>
<li> Representação da Arquitetura; </li>
<li> Metas e Restrições de Arquitetura; </li>
<li> Visão lógica;   </li>

<ul>

##### 1.4 Definições, Acrônimos e Abreviações

<html>
<ul>

<li> API: Application Programming Interface </li>
<li> DB: Banco de Dados, <i>DataBase</i> </li>

</ul>
</html>

##### 1.5 Referências


> MELO, Thalisson; ALVES, Álax; MARTINS, Lucas; RICHARD, Matheus; BERNARDO, Matheus de Sousa; Joranhezon. <b>Owla:</b> Documento de Arquitetura. Disponível em: <https://github.com/fga-gpp-mds/2016.2-Owla/wiki/Documento-de-Arquitetura>.


> André; Gabriel; Guilherme; ALMEIDA; Weyler. <b>Cidade Democrática:</b> Documento de Arquitetura. Disponível em: <https://github.com/fga-gpp-mds/2016.2-CidadeDemocratica/wiki/Documento-de-Arquitetura>.


#### 2. Representação da Arquitetura

##### 2.1 Diagrama de Relações
![diagrama de relacoes](https://user-images.githubusercontent.com/26308278/46329352-11b32000-c5e3-11e8-8009-f475630f8897.jpg)

<p  align="justify">  &emsp;&emsp;A arquitetura pensada para este projeto trata-se de uma arquitetura mista, envolvendo a arquitetura de Micro Serviços, representando os serviços internos de WebCrawler, de Alerta do público Doscente para com a comunidade acadêmica e de Tratamento de informação de logs de conversas, e os serviços externos, representando o serviço da própria API do Gmail que auxiliará no alerta explicitado anteriormente, juntamente com os serviços de mensagens instantâneas, o Telegram Messenger e o Facebook Messenger.</p>

<p  align="justify">  &emsp;&emsp;A arquitetura de repositórios, também conhecida como <i>Blackboard</i>, trabalha de maneira que todos os subsistemas manipulem a mesma base de dados. É utilizada principalmente em projetos onde grandes quantidades de dados são manuseados. Suas vantagens são:</p>

<html>
<ul>

<li> Compartilhamento eficiente de dados;
<li> <i>Backup</i> centralizado;
<li> Possibilidade de implementação de proteção de dados;
<li> Os subsistemas gravadores de dados não precisam saber quem os utilizará;
<li> Fácil integração de subsistemas.

</ul>
</html>

<p  align="justify">  &emsp;&emsp;Com essas características, percebe-se que o ChatBot em si seria a implementação da arquitetura de repositório, tendo como subsistemas os ferramentais proporcionados pelo software Rasa.</p>

![diagrama de repositorio](https://user-images.githubusercontent.com/26308278/46329097-b896bc80-c5e1-11e8-8ec4-5d15101aa753.jpeg)

<p align="justify">  &emsp;&emsp;O Rasa Core é um dos componentes importante dentro da arquitetura do Bot proposto. O desenvolvimento de um diálogo é de grande importância em tal contexto, logo, com a característica de _Machine Learning_ para a melhora de suas conversas, é essencial para manter um diálogo apropriado e interativo com o usuário.</p>
<p  align="justify">  &emsp;&emsp;Em associação ao Rasa Core, outro componente tecnológico atrelado ao ChatBot é o <i>Rasa NLU</i>. Esta tecnologia trabalha com o processamento natural de linguagem, a partir dela o desenvolvedor abre portas relacionadas a processamento de texto que o permitem criar um ambiente de comunicação mais interativo e humano, podendo assim criar uma comunicação mais fluida e dinâmica com o usuário.</p>
<p  align="justify">  &emsp;&emsp;A utilização da tecnologia no desenvolvimento de um ChatBot permite a implementação de uma comunicação mais humanizada, permitindo assim uma maior interatividade com o usuário. Com o tempo, a interação com o usuário permitirá ao programa um treinamento dele mesmo para melhor se comunicar com o exterior. Este é o principal objetivo da utilização do <i>Rasa NLU</i> para o processamento de linguagem do projeto em questão.</p>
<p  align="justify">  &emsp;&emsp;Algumas dos principais benefícios da tecnologia são:</p>

<html>
<ul>

<li>  Manuseio de conversação com <i>deep learning</i> para auto-evolução; </li>
<li>  <i>Open source</i> e customizável para o panorama do projeto; </li>
<li>  <i>Machine learning</i> integrado para melhores resultados. </li>

</ul>
</html>

<p  align="justify">  &emsp;&emsp;A tecnologia irá se comunicar com outras com o intuito de captar e processar informações do exterior, de acordo com as necessidades do usuário.</p>

<p align="justify">  &emsp;&emsp;Relacionado a parte de arquitetura de micro serviços, foram definidos 4 serviços internos (serviços a serem implementados), além dos 3 serviços externos (serviços a serem utilizados), sendo eles:</p>

###### 2.1.1 Serviços Internos

<html>
<ul>

<li> <i>WebCrawler_ do Restaurante Universitário </li>
<li> Serviço de API para tratamento e envio de informações do <i>Gmail</i> </li>  
<li> Serviço de API para tratamento das conversas associadas ao <i>ChatBot</i> </li>
<li> Serviço do Bot para a realização da comunicação </li>

<ul>
</html>

###### 2.1.2 Serviços Externos

<html>
<ul>

<li> Serviço de <i>API</i> do <i>Gmail</i> para gerenciamento de notificações dos professores via e-mail </li>
<li> Mensageiro <i>Telegram</i> para interação </li>
<li> Mensageiro do <i>Facebook</i> (<i>Facebook Messenger</i>) </li>

<ul>
</html>

<p align="justify">Outro fator da arquitetura do projeto é o estilo arquitetural Broker, que tem como principal finalidade servir de intermediário na comunicação entre os micro serviços de forma facilitada através de métodos que permitem flexibilidade de mudanças, escalabilidade e transparência na localização dos serviços, bem como a robustez da comunicação entre os serviços.</p>

<p align="justify">Além de tais serviços, também existe a integração de um painel para a análise de dados relativos às métricas associadas no Backlog de produto.</p>

##### 2.2 Tecnologias

###### 2.2.1 API Telegram Messenger e API Facebook Messenger

<p  align="justify">  &emsp;&emsp;Telegram Messenger e o Facebook Messenger são dois aplicativos de comunicação e bate-papo, comumente utilizados para a conversação em grupo ou de uma pessoa com outra. Os dois aplicativos proveêm aos seus usuários desenvolvedores a possibilidade de implementarem diferentes funcionalidades e <i>bots</i>, a partir de suas APIs.</p>

<p  align="justify">  &emsp;&emsp;As APIs dessas duas plataformas serão as pontes de comunicação com o usuário. A partir da implementação e integração do código-fonte com o <i>Rasa NLU</i>, o Telegram e o Messenger irão interagir com o aluno, recebendo suas mensagens e respondendo apropriadamente.</p>

###### 2.2.2 MongoDB

<p  align="justify">  &emsp;&emsp;A tecnologia MongoDB é um banco de dados <i>open-source</i> orientado a documentos. Classificado como NoSQL, a tecnologia utiliza documentos com padrão JSON.</p>

<p  align="justify">  &emsp;&emsp;Esta tecnologia se comunicará com o projeto de maneira que receberá os dados fornecidos pelas conversas e interações realizadas no ChatBot e as armazenará em um banco de dados, para posteriormente serem usadas na metrificação da utilização do ChatBot.</p>

###### 2.2.3 Web crawler

<p  align="justify">  &emsp;&emsp;Um <i>web crawler</i> é um rastreador automatizado utilizado para buscar e atualizar informações específicas de sites espalhados pela internet de maneira sistemática.</p>

<p  align="justify">  &emsp;&emsp;Neste projeto, o <i>Web crawler</i> será utilizado para buscar e processar as informações requisitadas pelo usuário. A partir da ação identificada pelo <i>Rasa</i>, o <i>crawler</i> entrará no website do restaurante universitário e a partir desse ponto, irá procurar e extrair as informações sobre o cardápio do dia. Além disso, o <i>crawler</i> irá trabalhar com a API do servidor Gmail e extrair os informes e e-mails enviados pelos professores, exibindo-os para alunos.</p>

<p  align="justify">  &emsp;&emsp;Nesse processamento de informações, a parte funcional dos alertas aos usuários também faz parte do serviço. O alerta tem como finalidade informar o usuário que deseja receber a notificação de algo relacionado ao cardápio, apartir de um agendamento de mensagens para horários específicos.</p>

###### 2.2.4 Elasticsearch

<p  align="justify">  &emsp;&emsp;<i>Elasticsearch</i> é um mecanismo de pesquisa baseado em <i>Representational state transfer</i>(REST) capaz de processar dados, tirados do banco de dados, podendo metrificá-los, funcionando no <i>back-end</i> de m projeto.</p>

<p  align="justify">  &emsp;&emsp;No projeto, o <i>Elasticsearch</i> ira captar os dados armazenados no banco de dados, realizando seu processamento e metrificação para a chegada em conclusões.</p>

###### 2.2.5 Kibana

<p  align="justify">  &emsp;&emsp;<i>Kibana</i> é uma ferramenta de visualização que transforma o código de <i>back-end</i> do <i>Elasticsearch</i> em gráficos visualizáveis.</p>

<p  align="justify">  &emsp;&emsp;A ferramenta irá abstrair os dados metrificados captados do <i>Elasticsearch</i> e os transformará em gráficos de fácil análise, agindo como o <i>front-end</i> das metrificações.</p>

###### 2.2.6 RabbitMQ

<p align="justify">  &emsp;&emsp;O <i>RabbitMQ</i> é uma ferramenta de mensageria robusta, confiável e escalável que facilita a comunicação entre os serviços atrelados ao projeto através de mensagens enfileiradas via conexão AMQP.</p>
<p align="justify">  &emsp;&emsp;A estratégia é utilizar o RabbitMQ para a integração dos serviços de WebCrawler, API Alerta e API de tratamento de informações com o Bot Lino, auxiliando na transferência das informação específicas de cada, de forma com que o sistema consiga lidar mais adequadamente com os dados transmitidos intermitentemente em um fluxo estável.</p>

###### 2.2.7 Flask

<p align="justify">  &emsp;&emsp; Flask é um microframework web escrito em Python e baseado na bibliotecas WSGI Werkzeug e Jinja2. Além dele ser facilmente importado para uso em um projeto com base em código python, ele proporciona uma simplicidade nas operações, ao passe que em simples microserviços são facilmente satisfeitos por ele.</p>

##### 2.3 Representação dos Serviços

###### 2.3.1 WebCrawler FGA

<p align="justify">  &emsp;&emsp;O serviço de <i>WebCrawler</i> tem como finalidade pegar as informações relativas ao cardápio do RU para enviar ao usuário.</p>

###### 2.3.2 Serviço de Alerta de mensagens

<p align="justify">  &emsp;&emsp;O serviço de alerta de mensagens deve pegar as mensagens recebidas pelo email pessoal do Lino, tratar essas informações para serem enviadas ao Bot, para apresentar como mensagem de conversa.</p>

###### 2.3.3 Serviço de Tratamento de Mensagens

<p align="justify">  &emsp;&emsp;O serviço de tratamento de mensagens tem a finalidade de capturar todas as mensagens obtidas pelos usuários que utilizam o bot para análises futuras, relacionada as métricas apresentadas no documento de backlog do produto.</p>

#### 3. Metas e Restrições de Arquitetura

<p align="justify">  &emsp;&emsp;As restrições de arquitetura do projeto são:</p>

<html>
<ul>

<li> Utilização de um Banco de Dados <i>MongoDB</i> para cada serviço interno, ou seja, um banco para o _Web Crawler_, um banco para a _API_ de tratamento de alertas do <i>Gmail</i> e um banco para a _API_ de tratamento das conversas realizadas. </li>
<li> Conexão com a internet necessária. </li>

</ul>
</html>

<p align="justify">  &emsp;&emsp;As metas do projeto são:</p>

<html>
<ul>

<li> Disponibilizar um fluxo de conversa com o usuário afim de atender/suprir as dúvidas em relação à procedimentos voltados à comunidade acadêmica realizados na Universidade de Brasília. </li>
<li> Fornecer aos alunos informações a respeito do cardápio do <i>RU</i> (Restaurante Universitário).</li>
<li> Alertar a comunidade acadêmica à respeito de prazos e avisos importantes, ex.: data de matrícula.</li>
<li> Disponibilizar o sistema 24 horas por dia, durante 7 dias na semana.</li>

<ul>
</html>

#### 4. Visão Lógica

##### 4.1 Diagrama de Pacotes

<p  align="justify">  &emsp;&emsp;Neste tópico se encontram o diagrama de pacotes bem como suas explicações e utilidades.</p>

<html>
<ul>

<li> O pacote <i>2018.2-Lino</i> é o pacote principal do projeto e conterá todos os outros sub-pacotes e documentos existentes no projeto. </li>
<li> No pacote <i>docs</i>, serão apresentados os documentos necessários para a compreensão do projeto, bem como pacote <i>policies</i>. </li>
<li> No pacote <i>Policies</i> estão contidas as políticas de boas práticas de programação e uso da plataforma <i>GitHub</i>. </li>

</ul>
</html>

<br>