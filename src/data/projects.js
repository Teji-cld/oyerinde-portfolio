export const projects = [
  {
    pattern: "HIGH AVAILABILITY",
    title: "Highly Available AWS Web Architecture",
    description:
      "Independently built and configured AWS infrastructure that routes internet traffic through an Application Load Balancer and target group to EC2 instances managed by an Auto Scaling Group. The build combines VPC networking, S3, IAM, CloudWatch and security groups that allow HTTP to EC2 only from the Load Balancer security group.",
    problem:
      "Provide a controlled, load-balanced path from internet traffic to EC2 while separating network access and supporting automatic instance management.",
    services: ["VPC", "EC2", "Application Load Balancer", "Target Group", "Auto Scaling Group", "Security Groups", "S3", "IAM", "CloudWatch", "NAT Gateway"],
    architecture: ["Internet", "Application Load Balancer", "Target Group", "Auto Scaling Group", "EC2"],
    lessons: [
      "How VPC subnets, route tables and NAT Gateway access support network paths for private resources.",
      "How an Application Load Balancer, target groups and health checks route traffic to EC2 instances.",
      "How to restrict EC2 inbound HTTP traffic to the Load Balancer security group instead of allowing 0.0.0.0/0.",
      "How IAM, S3 and CloudWatch support access control, object storage and infrastructure monitoring."
    ],
    screenshots: [
      { src: "/images/project-1-live-app.png.png", alt: "Live application for Highly Available AWS Web Architecture" },
      { src: "/images/project-1-vpc.png.png", alt: "VPC screenshot for Highly Available AWS Web Architecture" },
      { src: "/images/project-1-load-balancer.png.png", alt: "Application Load Balancer screenshot for Highly Available AWS Web Architecture" },
      { src: "/images/project-1-target-group.png.png", alt: "Target Group screenshot for Highly Available AWS Web Architecture" }
    ],
    github: "https://github.com/Teji-cld/AWS-Production-Style-Architecture-Project",
    demo: "#"
  },
  {
    pattern: "SERVERLESS · OBJECT STORAGE",
    title: "Serverless File Upload Platform",
    description:
      "Independently built a serverless file upload application in which a frontend sends REST API requests to API Gateway, which invokes a Python Lambda function that works with S3 object storage. IAM execution permissions and CloudWatch logs support the application flow.",
    problem:
      "Accept file upload requests without operating a persistent application server, while separating the frontend, API, compute and object storage responsibilities.",
    services: ["API Gateway REST API", "Lambda (Python)", "S3", "IAM", "CloudWatch"],
    architecture: ["Frontend", "API Gateway", "Lambda", "S3"],
    lessons: [
      "How a REST API request travels from the frontend through API Gateway to a Python Lambda function and S3.",
      "How Lambda execution permissions determine the AWS resources the function can use.",
      "How S3 separates object storage from the application compute layer.",
      "How to use CloudWatch logs to inspect Lambda execution and request handling."
    ],
    screenshots: [
      { src: "/images/project-2-live-app.png.png", alt: "Live application for Serverless File Upload Platform" },
      { src: "/images/project-2-api-gateway.png.png", alt: "API Gateway screenshot for Serverless File Upload Platform" },
      { src: "/images/project-2-lambda.png.png", alt: "Lambda screenshot for Serverless File Upload Platform" },
      { src: "/images/project-2-s3.png.png", alt: "S3 screenshot for Serverless File Upload Platform" }
    ],
    github: "https://github.com/Teji-cld/aws-serverless-file-upload-portal",
    demo: "#"
  },
  {
    pattern: "SERVERLESS · DATA",
    title: "Serverless Todo Application",
    description:
      "Independently built a serverless Todo application delivered through CloudFront and an S3-hosted frontend. API requests reach API Gateway, invoke Lambda as the backend compute layer and store persistent todo records in DynamoDB, with IAM and CloudWatch used where configured.",
    problem:
      "Provide a browser-based Todo interface with a static frontend, serverless API layer and persistent records without a continuously running backend server.",
    services: ["CloudFront", "S3", "API Gateway", "Lambda", "DynamoDB", "IAM", "CloudWatch"],
    architecture: ["CloudFront", "S3/Frontend", "API Gateway", "Lambda", "DynamoDB"],
    lessons: [
      "How CloudFront delivers an S3-hosted frontend to the browser.",
      "How API Gateway invokes Lambda to handle backend application requests.",
      "How DynamoDB persists todo records for the application.",
      "How IAM permissions and CloudWatch logs support the serverless application where configured."
    ],
    screenshots: [
      { src: "/images/project-3-live-app.png.png", alt: "Live application for Serverless Todo Application" },
      { src: "/images/project-3-api-gateway.png.png", alt: "API Gateway screenshot for Serverless Todo Application" },
      { src: "/images/project-3-dynamodb.png.png", alt: "DynamoDB screenshot for Serverless Todo Application" },
      { src: "/images/project-3-dynamodb-items.png.png", alt: "DynamoDB items screenshot for Serverless Todo Application" },
      { src: "/images/project-3-cloudfront.png.png", alt: "CloudFront screenshot for Serverless Todo Application" }
    ],
    github: "https://github.com/Teji-cld/aws-serverless-student-to-do-app",
    demo: "#"
  }
];
