## Projeto de desenvolvimento no ignaite Lab 3 da RocketSeat

Aprendendo a desenvolver um Storybook e gerando um deploy automaticamente no github

No projeto necessita de ter os arquivos de geração do deploy:
Exemplo C:\TI\RocketSeat\Ignit Lab\lab-ds\.github\workflows\deploy-docs.yml  conforme neste git
Configurar o main.cjs do na pasta storybook conforme neste git.

Antes de fazer o deploy no git pelo cli, vamos entender alguns passos abaixo.

O que é o GitHub CLI?

Como o próprio site nos diz, seria para ajudar e facilitar a vida da pessoa desenvolvedora para enviar Pull Requests e Issues para o GitHub, abaixo está o link da documentação.

documentação do GitHub

O comando principal é o gh. Através dele podemos usar os demais comandos, tais como:
	• gh pr [status, list, view, checkou, create]
	• gh issues [status, list, view, create]
	• gh help

Instalação no Windows 

	• Pelo powershall insira o cod abaixo:

Invoke-Expression (New-Object System.Net.WebClient).DownloadString(' https://get.scoop.sh/%27).


Agora sim, que temos o scoop instalado, podemos agora usar o comando para instalar o GitHub CLI. digitem o seguinte comando:

 scoop bucket add github-gh https://github.com/cli/scoop-gh.git

Depois,

scoop install gh.

Antes de utilizá-lo precisa autenticá-lo com a sua conta seguindo as instruções do passo a passo. 

Você pode testa-lo caso esteja tudo certo com o comando gh help.

Site para pesquisa,

GitHub CLI - Uma Nova Experiência no GitHub! - DEV Community 👩‍💻👨‍💻

Criando um repositório via linha de comando e fazendo  deploy

	* Inicialize o git init
	* Git add .
	* gh repo create
	* Push an existing local repository to GitHub   
	* Enter
	* Repository name() nome do seu projeto no git
	* Descrição do projeto
	* Visibility - public
	* Add a remote? (Y/n)  y
	* Enter
	* Git commit
	* git checkout -b main - (para mudar a branch)
	* Git push origin main

Projeto no git criado.

Na aba action do git, ele gera o build-and-deploy, no meu caso, precisei ir em settings/pages
Na branch mudar para a gh-pages, salva lo.
Será gerado um no pages build and deployment

Então o projeto será exibido no link gerado.

Toda a atualização do projeto em sua máquina, e quando for fazer o push o git já gera um novo deploy e pages buid atualizando automaticamente.
