import { Question } from '../entities/Question';
import { Bucket } from '../entities/Bucket';


let da: Bucket;

da = {
  bucketId : 1,
  bucketDescription : 'test',
  isActive: true
};
export const QUESTIONS: Question[] = [
  { questionId: 11,
    questionText: 'What is Inheritance?',
    sampleAnswer1: 'A process of binding data members (variables, properties) and member functions (methods) together.',
    sampleAnswer2: 'The process of showing only essential/necessary features of an entity/object to the outside world' +
     'and hide the other irrelevant information.',
    sampleAnswer3: 'The process of creating a new class by extending an existing class',
    sampleAnswer4: 'The process by which an object or function take different forms.',
    sampleAnswer5: 'None of the above',
    isActive: true,
    bucket: da
  },
  { questionId: 12,
    questionText: 'What is Polymorphism?',
    sampleAnswer1: 'A process of binding data members (variables, properties) and member functions (methods) together.',
    sampleAnswer2: 'The process of showing only essential/necessary features of an entity/object to the outside world' +
     'and hide the other irrelevant information.',
    sampleAnswer3: 'The process of creating a new class by extending an existing class',
    sampleAnswer4: 'The process by which an object or function take different forms.',
    sampleAnswer5: 'None of the above',
    isActive: true,
    bucket: da
  },
  { questionId: 13,
    questionText: 'What is Abstraction?',
    sampleAnswer1: 'A process of binding data members (variables, properties) and member functions (methods) together.',
    sampleAnswer2: 'The process of showing only essential/necessary features of an entity/object to the outside world' +
     'and hide the other irrelevant information.',
    sampleAnswer3: 'The process of creating a new class by extending an existing class',
    sampleAnswer4: 'The process by which an object or function take different forms.',
    sampleAnswer5: 'None of the above',
    isActive: true,
    bucket: da
  },
  { questionId: 14,
    questionText: 'What is Encapsulation?',
    sampleAnswer1: 'A process of binding data members (variables, properties) and member functions (methods) together.',
    sampleAnswer2: 'The process of showing only essential/necessary features of an entity/object to the outside world' +
     'and hide the other irrelevant information.',
    sampleAnswer3: 'The process of creating a new class by extending an existing class',
    sampleAnswer4: 'The process by which an object or function take different forms.',
    sampleAnswer5: 'None of the above',
    isActive: true,
    bucket: da
  },
  { questionId: 15,
    questionText: 'If TableA has 100 rows and TableB has 10 rows, how many rows would be retrieved from'
    + 'the following query? \nSELECT * FROM TableA, TableB',
    sampleAnswer1: '10000',
    sampleAnswer2: '1000',
    sampleAnswer3: '100',
    sampleAnswer4: '10',
    sampleAnswer5: '0',
    isActive: true,
    bucket: da
  },
  { questionId: 16,
    questionText: 'Given that the table capitals extends the table cities, when querying cities I will receive results from:',
    sampleAnswer1: 'Both cities and capitals tables.',
    sampleAnswer2: 'Only the cities table, because inheritance is not possible in PostgreSQL.',
    sampleAnswer3: 'Neither table.',
    sampleAnswer4: 'Only the cities table, because you must explicitly list the inheriting table to include its data',
    sampleAnswer5: 'Only the capitals table',
    isActive: true,
    bucket: da
  },
  { questionId: 17,
    questionText: 'What is a Circuit Breaker in a microservice application?',
    sampleAnswer1: 'Registers other services and provides load balancing for connections between them.',
    sampleAnswer2: 'Introduces publisher-subscriber messaging for asynchronous data consistency.',
    sampleAnswer3: 'Offers small and lightweight containerization for speedy deployment of services.',
    sampleAnswer4: 'Improves resiliency with failsafe methods when dependent microservices become unavailable.',
    sampleAnswer5: 'All of the above',
    isActive: true,
    bucket: da
  },
  { questionId: 18,
    questionText: 'What is Docker Swarm?',
    sampleAnswer1: 'A tool for creating a single, virtual Docker host from a manager and several worker hosts.',
    sampleAnswer2: 'A plugin tool for Jenkins integrating Docker containerization with CI/CD.',
    sampleAnswer3: 'A tool for organizing local image repositories and running service daemons.',
    sampleAnswer4: 'A tool for orchestrating builds for multiple Dockerfiles with a composite file. ',
    sampleAnswer5: 'None of the above',
    isActive: true,
    bucket: da
  },
  { questionId: 19,
    questionText: 'Which annotation configures the Eureka server?',
    sampleAnswer1: '@EnableDiscovery',
    sampleAnswer2: '@EnableEurekaClient',
    sampleAnswer3: '@EnableEurekaServer',
    sampleAnswer4: '@Configuration',
    sampleAnswer5: 'All of the above are needed to configure a Eureka server.',
    isActive: true,
    bucket: da
  },
  { questionId: 20,
    questionText: 'Which annotation configures a fallback method with Hystrix?',
    sampleAnswer1: '@HystrixCommand(fallbackMethod="someMethod()")',
    sampleAnswer2: '@HystrixCommand(fallback="someMethod()")',
    sampleAnswer3: '@HystrixCommand(fallbackMethod="someMethod") ',
    sampleAnswer4: '@HystrixCommand(fallback="someMethod")',
    sampleAnswer5: '@HystrixFallback',
    isActive: true,
    bucket: da
  },
  { questionId: 21,
    questionText: '"Contract First" web services are:',
    sampleAnswer1: 'The binding and support classes are automatically generated with a ' +
    'SOAP tool instead of manually written by the developer.',
    sampleAnswer2: 'Made with the JAX-RS API',
    sampleAnswer3: 'Dependent on a WSDL being written before the Java classes. ',
    sampleAnswer4: 'The same as the "Bottom-Up" approach',
    sampleAnswer5: 'Dependent on a web.xml file being written before the Java classes',
    isActive: true,
    bucket: da
  },

];

export const expectedQuestion: Question = {
        questionId: 51,
        questionText: 'Re-contextualized foreground website',
        sampleAnswer1: 'Customizable bifurcated analyzer',
        sampleAnswer2: 'Ergonomic reciprocal complexity',
        sampleAnswer3: 'Universal user-facing moratorium',
        sampleAnswer4: '4',
        sampleAnswer5: '5',
        isActive: true,
        bucket: da
};


