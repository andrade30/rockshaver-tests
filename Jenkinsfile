pipeline {
    agent {
        docker { 
            image 'cypress/browsers:node-22.13.0-chrome-132.0.6834.83-1-ff-134.0.1-edge-131.0.2903.147-1' 
            args '-u root --network rockshaver_skynet'
        }
    }
    stages {
        stage('API Tests (Backend)') {
            steps {
                dir('api'){
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'node runner.js'
                }
            }
        }

        stage('Mobile Tests') {
            steps {
                dir('mobile') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'node runner.js'
                }
            }
        }

        stage('Web Tests (Frontend)') {
            steps {
                dir('web') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'node runner.js'
                }
            }
        }
    }
}