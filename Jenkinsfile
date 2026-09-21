pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building Docker Compose application...'
                sh 'docker-compose build'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Docker Compose application...'
                sh 'docker-compose config'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Docker Compose application...'
                sh 'docker-compose up -d'
            }
        }
    }
}
