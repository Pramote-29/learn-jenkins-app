pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '0d658bfd-4dd3-4571-a344-b97d4c60bca6'
        NETLIFY_AUTH = credentials('netlify-token')
    }

    stages {
        stage('Build') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "================Building the project================"
                    ls -la
                    node --version
                    npm --version
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }


        stage('Test')   {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                    echo "================Testing the project================"
                    test -f build/index.html
                    npm test
                '''
            }
            post {
                always {
                    echo "Test stage completed"
                    sh 'ls -la test-results/ || echo "test-results directory not found"'
                }
            }
        }

        stage('Deploy') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "================Installing Netlify CLI================"
                    npm install netlify-cli --save-dev
                    node_modules/.bin/netlify --version
                    
                    echo "================Environment Info================"
                    echo "Node version: $(node --version)"
                    echo "NPM version: $(npm --version)"
                    echo "Working directory: $(pwd)"
                    echo "Directory contents:"
                    ls -la
                    
                    echo "================Build Directory Content================"
                    ls -la build/
                    
                    echo "================Netlify Auth Token Info================"
                    echo "Netlify Auth Token Length: ${#NETLIFY_AUTH}"
                    echo "Auth token first 4 chars: ${NETLIFY_AUTH:0:4}..."
                    
                    echo "================Netlify Site Information================"
                    echo "Deploying to Netlify Site ID: $NETLIFY_SITE_ID"
                    
                    echo "================Listing Available Netlify Sites================"
                    node_modules/.bin/netlify sites:list --auth=$NETLIFY_AUTH || echo "Failed to list sites"
                    
                    echo "================Starting Netlify Deployment================"
                    node_modules/.bin/netlify deploy --dir=build --prod --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH --debug
                '''
            }
            post {
                success {
                    echo "Deployment succeeded!"
                }
                failure {
                    echo "Deployment failed. Check logs for details."
                    sh '''
                        echo "================Netlify Status Check================"
                        node_modules/.bin/netlify status --auth=$NETLIFY_AUTH || echo "Failed to get status"
                    '''
                }
            }
        }
    }
    
    post {
        always {
            script {
                echo "Checking for test results"
                if (fileExists('test-results/junit.xml')) {
                    junit 'test-results/junit.xml'
                } else {
                    echo "Test results file 'test-results/junit.xml' not found"
                    sh 'find . -name "*.xml" | grep -i junit || echo "No junit files found"'
                }
            }
        }
        success {
            echo "Pipeline completed successfully"
        }
        failure {
            echo "Pipeline failed - see above for details"
        }
    }
}