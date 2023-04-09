export interface Skill {
  name: string,
  level: 1 | 2 | 3,
}

export interface SkillGroup {
  group: string;
  skills: Skill[];
}

export const skills: SkillGroup[] = [
  {
    group: "Progamming languages",
    skills: [
      {
        name: "Nodejs",
        level: 3,
      },
      {
        name: "Denojs",
        level: 2,
      },
      {
        name: "PHP",
        level: 3,
      },
      {
        name: "Python",
        level: 2,
      },
      {
        name: "Vanilla Js",
        level: 3,
      },
      {
        name: "HTML",
        level: 3,
      },
      {
        name: "CSS",
        level: 3,
      },
      {
        name: "DOM",
        level: 3,
      },
      {
        name: "Java",
        level: 1,
      },
      {
        name: "Go",
        level: 1,
      },
      {
        name: "Rust",
        level: 1,
      },
      {
        name: "Kotlin",
        level: 1,
      },

      {
        name: "C++",
        level: 1,
      },
    ]
  },
  {
    group: "Frameworks",
    skills: [
      {
        level: 3,
        name: "Reactjs"
      },
      {
        level: 3,
        name: "AngularJs"
      },
      {
        level: 3,
        name: "Laravel"
      },
      {
        level: 3,
        name: "Vuejs"
      },
      {
        level: 2,
        name: "Django"
      },
      {
        level: 3,
        name: "Stylus"
      },
      {
        level: 3,
        name: "SCSS"
      },
      {
        level: 3,
        name: "SASS"
      },
      {
        level: 3,
        name: "Express"
      },
      {
        level: 3,
        name: "Nestjs"
      },
      {
        level: 3,
        name: "Nextjs"
      },
      {
        level: 2,
        name: "Svelte"
      },
      {
        level: 1,
        name: "Spring"
      },
      {
        level: 3,
        name: "Pugjs"
      },
      {
        level: 3,
        name: "Code Igniter"
      },
      {
        level: 2,
        name: "Phalcon"
      },
      {
        level: 3,
        name: "Boostrap"
      },
      {
        level: 3,
        name: "Material UI"
      },
      {
        level: 3,
        name: "Jquery"
      },
      {
        level: 2,
        name: "Tailwind"
      },
      {
        level: 1,
        name: "Fresh"
      },
      {
        level: 1,
        name: "Astro"
      },
      {
        level: 1,
        name: "Cargo"
      },
    ],
  },
  {
    group: "Devops",
    skills: [
      {
        name: "Alibaba Cloud",
        level: 2,
      },
      {
        name: "GCP",
        level: 2,
      },
      {
        name: "docker",
        level: 2,
      },
      {
        name: "kubernetes",
        level: 2,
      },
      {
        name: "Bitbucket Pipeline",
        level: 3,
      },
      {
        name: "Github Action",
        level: 2,
      },
      {
        name: "Argo Workflow",
        level: 2,
      },
      {
        name: "Argo CD",
        level: 1,
      },
      {
        name: "Jenkins",
        level: 2,
      },
      {
        name: "AWS",
        level: 1,
      },
      {
        name: "Microsoft Azure",
        level: 1,
      },
    ]
  },
  {
    group: "Databases / Messaging",
    skills: [
      {
        name: "Mysql",
        level: 3,
      },
      {
        name: "Postgress",
        level: 3,
      },
      {
        name: "Mariadb",
        level: 2,
      },
      {
        name: "Mongodb",
        level: 3,
      },
      {
        name: "Oracledb",
        level: 1,
      },
      {
        name: "Redis",
        level: 3,
      },
      {
        name: "RabbitMq",
        level: 2,
      },
      {
        name: "Graphql",
        level: 2,
      },
      {
        name: "Firebase",
        level: 2,
      },
      {
        name: "Kafka",
        level: 1,
      },
      {
        name: "SOLR",
        level: 1,
      },
      {
        name: "elasticsearch",
        level: 1,
      },
    ]
  },
  {
    group: "Others",
    skills: [
      {
        name: "ffmpeg",
        level: 1,
      },
      {
        name: "GRPC",
        level: 2,
      },
      {
        name: "RESTApi",
        level: 3,
      },
      {
        name: "Selenium",
        level: 1,
      },
      {
        name: "Payment Gateway",
        level: 2,
      },
      {
        name: "Apache Benchmark",
        level: 2,
      },
      {
        name: "Webhook",
        level: 3,
      },
      {
        name: "Micro Frontend",
        level: 1,
      },
      {
        name: "Webview",
        level: 2,
      },
    ]
  }
]