| Data       | Versão | Descrição                                                         | Autor                              |
| :--------: | :----: | :---------------------------------------------------------------: | :--------------------------------: |
| 27/08/2018 | 1.0    | Criação do documento com template inicial                         | Guilherme Augusto                  |
| 28/08/2018 | 1.1    | Construção inicial dos tópicos 1, 2                               | Guilherme Augusto                  |
| 01/09/2018 | 1.2    | Construção inicial do tópico 3, 4 e 5                             | Guilherme Augusto                  |
| 03/09/2018 | 1.3    | Modificação de tópicos pela mudança do escopo                     | Guilherme Augusto e Ícaro Oliveira |
| 03/09/2018 | 1.4    | Melhoras nos tópicos com atualização do novo escopo               | Ícaro Oliveira                     |
| 04/09/2018 | 1.5    | Melhoras no tópico 4                                              | Guilherme Augusto                  |
| 04/09/2018 | 1.6    | Construção inicial do tópico 8.2                                  | Guilherme Augusto                  |
| 07/09/2018 | 1.7    | Construção do tópico 8.1                                          | Guilherme Augusto                  |
| 07/09/2018 | 1.8    | Construção do tópico 6                                            | Ícaro Oliveira                     |
| 08/09/2018 | 1.9    | Construção do tópico 7                                            | Ícaro Oliveira                     |
| 08/09/2018 | 2.0    | Finalização do documento com os tópicos 9 e 10                    | Guilherme Augusto                  |
| 29/09/2018 | 2.1    | Refatoração do documento: escrita, formatação e melhoria de texto | Letícia de Souza                   |

##### 1. Introdução

O objetivo do documento é informar os propósitos, objetivos e requisitos de alto nível do projeto, além de descrever especificações de planejamento do novo bot da universidade, o Lino, companheiro e ajudante da comunidade FGA.

##### 2. Descrição

O Lino é um bot que visa orientar, alertar e tirar dúvidas a respeito de assuntos mais recorrentemente procurados na Universidade de Brasília - Campus FGA. Para apoio ao Bot, também será produzido um painel de controle de métricas, que acompanha a eficiência dele durante seu uso em produção.

##### 3. Propósito e Justificativa

O público em geral da comunidade FGA, possui dificuldades em sanar, e até mesmo acessar mecanismos que retirem suas dúvidas frequentes sobre assuntos acadêmicos gerais. Os servidores da FGA ainda não possuem um canal informal que dissemine informações a respeito de atividades disponibilizadas por eles aos alunos.

Atualmente, o mais comum é que os alunos recebam algumas informações acadêmicas através de email, ou que acessem sites oficiais da universidade para obter informações mais específicas. Entretanto, com a popularização de menssageiros,  como o Telegram e o Messenger, é comum que as pessoas se mantenham mais atentas e atendam mais rapidamente à mensagens informais através desses mensageiros.   

##### 4. Objetivos

O obejtivo principal é facilitar o processo de retirada de dúvidas frequentes da comunidade FGA, minimizando tempo e esforço de seus usuários, facilitando o acesso à informações relevantes através de mensagens rápidas.

Dessa forma surge o Lino, o bot da FGA, para atender à necessidades, propondo uma solução com foco em experiência de usuário, promovendo uma interação mais rápida e prática para avisos rápidos de servidores para alunos.

##### 5. Requisitos de Alto Nível

Estão dentre os requisitos de alto nível:

<li>Interação através de linguagem natural para uma melhor usabilidade</li>
<li>Fluxos de conversas objetivos e práticos</li>
<li>Construção da personalidade do Lino</li>
<li>Captura de informações contidas em __websites__ para incrementar a capacidade do Lino</li>
<li>Coleta de métricas para evolução do Lino</li>

##### 6. Riscos
Na estimativa de riscos do projeto, opta-se por estipular um padrão para a avaliação de probabilidade e impacto, através da priorização de riscos, como demonstrado na tabela abaixo:

| Probabilidade (P)      | Peso  |
| :--------------------: | :---: |
| Raro (< 10%)           | 1     |
| Improvável (10% - 25%) | 2     |
| Moderado (25% - 50%)   | 3     |
| Provável (50% - 75%)   | 4     |
| Quase Certo (> 75%)    | 5     |


| Impacto (I)    | Descrição                                         | Peso  |
| :------------: | :-----------------------------------------------: | :---: |
| Insignificante | Quase que imperceptível ao projeto                | 1     |
| Baixo          | Pouca influência no desenvolvimento do projeto    | 2     |
| Moderado       | Notável ao projeto, mas sem grandes consequências | 3     |
| Alto           | Dificulta o desenvolvimento do projeto            | 4     |
| Catastrófico   | Impossibilita o prosseguimento do projeto	5       | 5     |

A fórmula para o cálculo do Score (S) de cada risco é calculada: `S = P x I` e o Score de cada Sprint é dado pela soma dos Scores dos riscos identificados nesta.

Ao início de cada Sprint, cada risco é calculado com base nas tabelas apresentadas. Ou seja, a cada nova iteração, um risco conhecido e bem mitigado nas sprints anteriores tende sempre a diminuir. Levando isso em conta, riscos identificados ao decorrer do projeto tendem a ter impacto elevado e necessitam de medidas preventivas rápidas e precisas.

A seguir, a tabela para os riscos identificados:

| Risco                                                           | Resposta ao risco                                                                                                                                                                                                 |
| :-------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Integração do time                                              | Realizar feedbacks constantes para facilitar a comunicação e o acompanhamento constante dos membros;<br> Realização de dailys presenciais e remotas                                                               |
| Configuração de ambiente                                        | Auxiliar a equipe de desenvolvimento na configuração de suas máquinas;<br> Utilização do Docker                                                                                                                   |
| Integração entre os serviços                                    | Treinamento sobre as tecnologias utilizadas; <br> Auxílio técnico da equipe de EPS<br>                                                                                                                            |
| Greve e paralizações que interfiram no calendário acadêmico     | Replanejar o cronograma                                                                                                                                                                                           |
| Indisponibilidade de integrantes                                | Manter cronograma atualizado com as viagens anunciadas com antecedência;<br> Replanejar pareamento e/ou atividades do(s) membro(s) indisponíveis                                                                  |
| Grade Horária                                                   | Manter planilha de horários dos membros atualizadas;<br> Planejar pareamento entre pessoas que tiverem grade horária parecida                                                                                     |
| Falta de planejamento por parte de EPS                          | Manter feedback e transparência constante entre os membros;<br> Dividir atividades para não sobrecarregar ninguém;<br> Pedir auxílio para a professora e/ou monitores                                             |
| Descomprometimento da equipe                                    | Aumentar o senso de integração entre os membros para motivação; <br> Comunicar individualmente com o membro; <br> Comunicar a professora em casos extremos                                                        |
| Mudança de escopo                                               | Feedback constante com o cliente, por meio de reuniões; <br> Buscar novas alternativas para elicitação de requisitos                                                                                              |
| Mudança de arquitetura                                          | Preparar uma arquitetura adaptável, que permita mudanças sem grandes prejuízos                                                                                                                                    |
| Indefinição do escopo                                           | Feedback com o cliente; <br> Utilização de ferramentas para visualizá-lo melhor, como mapas mentais, Canvas etc                                                                                                   |
| Desistência da disciplina                                       | Comunicação entre os integrantes para integrar o time; <br> Transparência com os membros da equipe; <br> Replanejamento de escopo para adequação à capacidade de produtividade restante                           |
| Atrasos nas reuniões                                            | Comunicação constante entre os membros; <br> Marcar reuniões antecipadamente para evitar chocar horário com compromissos de outros membros; <br> Conversa individual; <br> Comunicar à professora                 |
| Atrasos nas entregas (dívida técnica)                           | Auxílio técnico de EPS; <br> Organizar pareamento para transferência de conhecimento; <br> Evitar que as entregas atrasem pois os membros não tinham conhecimento suficiente para realizá-las                     |
| Entrega contínua                                                | Definir pipeline; <br> Treinamento dos membros com as ferramentas de CD                                                                                                                                           |
| Integração contínua                                             | Definir pipeline;<br> Treinamento dos membros com as ferramentas de CI                                                                                                                                            |
| Performance do produto                                          | Monitorar a atividade do bot através do ElasticSearch e Kibana; <br> Refatoração constante; <br> Utilização de padrões de desenvolvimento para evitar o aumento de complexidade e lentidão no sistema             |
| Qualidade da interação do bot                                   | Monitorar a atividade do bot através do ElasticSearch e Kibana; <br> Atentar para feedback dos usuários; <br> Remodelar os fluxos de conversa que estejam causando gatilhos de confusão                           |
| Adicionar dificuldade técnica no decorrer do projeto            | Treinamento da equipe; <br> Comunicação constante; <br> Escolher ferramentas que possuem boa documentação e rápida curva de aprendizado                                                                           |
| MDS depender muito de EPS para realizar atividades propostas    | Permitir a rápida comunicação entre os membros; <br> Disponibilização de material e treinamento suficiente para MDS conseguir trabalhar sem o auxílio constante de EPS                                            |
| EPS não disponibilizar condições necessárias para MDS trabalhar | Dividir o trabalho entre os membros de EPS para; <br> Comunicação constante entre os membros; Identificação e correção de gargalos na disponibilização de ambiente, conhecimento e treinamento dos membros de MDS |
| Falta de métodos tradicionais para garantir qualidade (testes)  | Coleta de dados e utilização de painéis para acompanhamento em uso para fornecer insights sobre a qualidade do bot (Kibana e ElasticSearch)                                                                       |

##### 7. Estimativa de Custo

O cálculo de custos leva em conta três fatores: aquisição, pessoal e ferramentas. Desta forma é levado em conta os custos reais de mercado: desde o custo com energia e aluguel de sala, até as ferramentas utilizadas pelos membros.

###### 7.1 Custo de aquisição
Nesse fator, são considerados os seguintes tópicos: custos de equipamentos e aluguel de uma sala em um coworking na cidade de Brasília - DF.

| Equipamento                               | Quantidade                             | Finalidade                     | Valor unitário | Preço        |
| :---------------------------------------: | :------------------------------------: | :----------------------------: | :------------: | :----------: |
| Notebooks                                 | 10 unidades                            | Desenvolvimento e planejamento | R$ 3.000       | R$ 30.000    |
| Aluguel de espaço físico em um coworking* | 5 dias úteis                           | Alocação de pessoal            | R$150**        | R$ 24.000*** |
| Transporte e alimentação                  | 4 passagens diárias + R$10 alimentação | Transporte e alimentaçao       | R$ 20/dia      | R$ 16.000*** |

*resultado com base no preço médio de um Coworking em Brasília, em set/2018. Internet, água e luz inclusas.
**por semana, individual.
***valor resultante para 10 membros, durante 16 sprints com duração de uma semana.

###### 7.2 Custo de pessoal

Nesse caso, foram levados em conta o valor médio por hora de um desenvolvedor Python Júnior, para a equipe de MDS e do valor médio entre desenvolvedores Plenos, Scrum Master e Analista de BI Júnior para a equipe de EPS.

| Cargo                                               | Quantidade | Salário/mês (160h total) | Salário/hora | Total      |
| :-------------------------------------------------: | :--------: | :----------------------: | :----------: | :--------: |
| Deselvolvedor Python Jr                             | 5          | R$ 3.000                 | R$18,75      | R$ 15.000* |
| Analista BI, Arquiteto, DevOps, Scrum Master e PO** | 5          | R$ 6.000                 | R$ 37,50     | R$ 60.000* |

*preço resultante para 5 membros, trabalhando 10h por semana, durante 16 sprints com duração de uma semana.
**uma vez que a equipe de EPS não possui apenas um único papel, foi calculado um preço médio de cada profissional da área

###### 7.3 Custo de Ferramentas

| Ferramenta                                                 | Finalidade                                  | Preço total |
| :--------------------------------------------------------: | :-----------------------------------------: | :---------: |
| Google Drive                                               | Compartilhamento de arquivos                | R$ 0        |
| Editor de Texto                                            | Elaboração de documentos e código           | R$ 0        |
| GitHub                                                     | Versionamento de arquivos                   | R$ 0        |
| Telegram                                                   | Comunicação entre os membros                | R$ 0        |
| Python, Rasa, API Telegram, ElasticSearch, Kibana, MongoDB | Tecnologias utilizadas para desenvolvimento | R$ 0        |

###### 7.4 Custo total
| Custo       | Valor total |
| :---------: | :---------: |
| Aquisição   | R$ 43.000   |
| Pessoal     | R$ 75.000   |
| Ferramentas | R$ 0        |

O valor total estimado dos custos informados é de R$118.000.
Levando em conta 10% de risco, **o valor final para a estimativa de custo é de R$129.800**.

##### 8. Partes Interessadas

###### 8.1. Usuários

<li>Discentes</li>
<li>Doscentes</li>
<li>Servidores</li>

###### 8.2. Equipe

| Nome                          | Papel              | Github             |
| :---------------------------: | :----------------: | :----------------: |
| Bruna Pinos de Oliveira       | Gerente de Projeto | @brunapinos        |
| Guilherme Augusto Nunes Silva | Gerente de Projeto | @guiaugusto        |
| Guilherme Guimarães Lacerda   | Gerente de Projeto | @guilacerda        |
| Ícaro Pereira de Oliveira     | Gerente de Projeto | @icarooliv         |
| Letícia de Souza Santos       | Gerente de Projeto | @leticiadesouza    |
| Gabriel Braga Mendes          | Desenvolvedor      | @braga9            |
| Gabriel Filipe Manso Araújo   | Desenvolvedor      | @gabrielfilipe7unb |
| Guilherme Marques Rosa        | Desenvolvedor      | @guilhesme23       |
| Matheus Salles Blanco         | Desenvolvedor      | @MatheusBlanco     |
| Pedro Rodrigues Pereira       | Desenvolvedor      | @pedro-prp         |

##### 9. Requisitos para a aprovação

Para o projeto ser aprovado, ele deve atingir as seguintes metas:

<li>Ter a possibilidade de ser acessado pelos mensageiros Telegram e Facebook Messenger.</li>
<li>Ter implementado as funcionalidades definidas pelo escopo do projeto.</li>
<li>Atender as especificações dos requisitos levantados.</li>

##### 10. Referências

> ROBERTO, Elmar; DIB, Cecília; CLÍMACO, Gabriel; CAROLINA, Maria; XAVIER, Júlio. <b>Trezentos - Termo de Abertura de Projeto</b>. Disponível em:
<https://fga-eps-mds.github.io/2018.1-Dulce_Docs/abertura/tap.html>.


> FRANÇA, Diego; SCONETTO, João; MENDES, Mariana; ARNAUD, Victor. <b>Dr. Down - Termo de Abertura de Projeto</b>. Disponível em: <https://fga-eps-mds.github.io/2018.1-Dr-Down/eps/TAP/>


> EGEWARTH, Eliseu; EGEWARTH, João; GAMA, Gabriela; ALVES, Isaque. <b>Dulce - Termo de Abertura de Projeto</b>. Disponível em:
<https://github.com/fga-eps-mds/2017.1-Trezentos/wiki/Termo-de-Abertura-do-Projeto>


> LOVEMONDAYS. <b>Salários para programadores e equipe de analista, arquiteto, scrum master, DevOps e PO</b>. Disponível em: <https://www.lovemondays.com.br/>.


> COWORKING BRASIL.<b> Espaços para Coworking no Distrito Federal</b>. Disponível em:
<https://coworkingbrasil.org/df/>.


