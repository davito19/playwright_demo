pipeline {
    agent any
    tools {
        nodejs 'Node 22.3' 
    }
    environment {
        PLAYWRIGHT_BROWSERS_PATH = './node_modules/.cache/ms-playwright'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh '''
                npm install
                npx playwright install  
                '''
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'test-results/**'
        }
    }
}
