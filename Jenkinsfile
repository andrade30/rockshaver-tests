pipeline {
    agent {
        docker { 
            image 'cypress/browsers:latest' 
            args '-u root --network rockshaver_skynet'
        }
    }
    stages {
        stage('API Tests (Backend)') {
            steps {
                dir('api'){
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run'
                }
            }
        }

        stage('Mobile Tests') {
            steps {
                dir('mobile') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run'
                }
            }
        }

        stage('Web Tests (Frontend)') {
            steps {
                dir('web') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run'
                }
            }
        }
    }
}