# Api-Medico

API Criada com Laravel, onde é possivel Cadastrar, Listar, Alterar e Excluir dados, diretamento do banco de dados.
API de Médico, com os seguintes dados ( Nome, CRM, Telefone, e Especialidade)

Para iniciar o backend é preciso ter o laravel instalado, caso não tenha pode ser instalado pelo comando > composer global require laravel/installer;
Se não tiver o apache instalado, é preciso colocar a pasta do backend no htdocs do xampp, para iniciar;
Em seguida, precisa ser acessado a pasta onde salvou, e rodar o comando > composer install;

Crie uma copia do arquivo .env.example, renomeie para .env e informe:
APP_KEY=base64:/Y3gyV3sleLK2OYZqUTN9v6cZ8xG95BFGZA8060IZ1U=
DB_DATABASE=apimedicos

Após a instalação, é so rodar o comando para criar o banco de dados > php artisan migrate
Em seguida, já pode seguir para o FrontEnd:

-> Instale o YARN através do comando > npm install -g yarn (precisa ter também o Node.js instalado);
-> Acessando a pasta do frontend, rode o comando yarn, para ser instalado todas as dependencias;
-> E depois, yarn start - Para inciar a aplicação.

** Meu primeiro projeto com React. Para futuros trabalho pretendo colocar um 'option' onde é possivel selecionar a especialidade, e salvar no banco de dados automaticamente, sem precisar digitar como está no momento.
