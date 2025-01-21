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
                    sh 'npx cypress run --record --key 202bb81a-2565-4c1b-9daf-5f3ff8e98028'
                }
            }
        }

        stage('Mobile Tests') {
            steps {
                dir('mobile') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run --record --key 2f0ed264-e6d3-4af7-a0f2-0fd675222aa9'
                }
            }
        }

        stage('Web Tests (Frontend)') {
            steps {
                dir('web') {
                    sh 'npm install'
                    sh 'npx cypress install --force'
                    sh 'npx cypress run --browser chrome --record --key 417026c5-d4fa-494a-9655-2ee99e86ac17'
                }
            }
        }
    }
}