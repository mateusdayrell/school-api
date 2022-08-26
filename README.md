# School-api :books:

## Description
Aplication to manage students,  inspired on [Luiz Otávio Miranda](https://www.otaviomiranda.com.br/2017/meus-cursos/) project, developed to pratice NodeJs and Sequelize.<br>

## Technologies used <br>
Click to access the documentation: [NodeJs](https://nodejs.org/en/), [Express](https://expressjs.com/pt-br/), [Sequelize](https://sequelize.org/docs/v6/).

## Project setup <br>

### Clone repository
```
git clone https://github.com/mateusdayrell/school-api.git
```

### Access the project folder
```
cd school-api
```


### Install the dependencies
```
npm install
```

### Copy .env.example to .env
```
cp .env.example .env
```

### Run migrations
```
npx sequelize db:migrate
```

### Run seeds
```
npx sequelize db:seed:all
```

### Serve the aplication
```
npm run dev
```
