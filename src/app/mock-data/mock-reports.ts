import { ReportData, Screener, BarChartData } from "../entities/ReportData";

export const MockAllScreeners: ReportData[] = [
    { 
        hardestQuestions:   [
            "What is the difference betwwen JRE, JDK, and JVM?",
            "How can I create a alias in SQL?",
            "What is the doctype declaration in HTML?",
            "What is ECMA script?",
            "What are template literals and arrow notation?"
          ],
        avgSkillTypeScore: [{name: 'Soft Skills', y: 64.9}, {name: 'Tech Skills', y: 79.3},{name: 'Time Hacking Skills', y: 67.1},
            {name: 'Basic Math Skils', y: 84.5},{name: 'Advance Math Skills', y: 87.2}, {name: 'Beta Skills', y: 88.2}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 88.7}, {name: 'Hibernate', y: 60.2},{name: 'SQL', y: 88.0},
            {name: 'Angular', y: 89.3},{name: 'Spring AoP', y: 55.0}, {name: 'Java Concepts', y: 73.6},{name: 'SOAP', y: 78.0},
            {name: 'JDBC', y: 78.0}, {name: 'REST', y: 80.0}],
        violationsByType: [{ name: 'Profanity', y: 6}, { name: 'Dress', y: 8},{ name: 'Attitude', y: 7},
            { name: 'Conduct', y: 5}],
        numApplicantsPassed: 123,
        numApplicantsFailed: 23, 
        screener: null
    },
    { 
        hardestQuestions: 
        [
          "What is linting in angular?",
          "What is unix?",
          "How is hibernate configured (Annotation wise)?",
          "What is pyramid testing?",
        "What is the difference between SOAP and REST?"
          ],
        avgSkillTypeScore: [{name: 'Soft Skills', y: 79.3}, {name: 'Tech Skills', y: 80.9},{name: 'Time Hacking Skills', y: 62.7},
            {name: 'Basic Math Skils', y: 94.3},{name: 'Advance Math Skills', y: 87.6}, {name: 'Beta Skills', y: 84.1}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 94.7}, {name: 'Hibernate', y: 68.2},{name: 'SQL', y: 82.0},
            {name: 'Angular', y: 85.3},{name: 'Spring AoP', y: 59.0}, {name: 'Java Concepts', y: 70.6},{name: 'SOAP', y: 75.0},
            {name: 'JDBC', y: 76.0}, {name: 'REST', y: 76.0}],
        violationsByType: [{ name: 'Profanity', y: 10}, { name: 'Dress', y: 11},{ name: 'Attitude', y: 9},
            { name: 'Conduct', y: 8}],
        numApplicantsPassed: 192, 
        numApplicantsFailed: 31,
        screener: null,
    },
    { 
        hardestQuestions: [
            "What are the sublanguages of SQL?",
            "What are the primary JDBC interfaces?",
            "What is the difference between statements and prepared statements and why would we prefer one over the other?",
            "What values are falsey in JavaScript?",
            "What is SOAP?"
          ], 
        avgSkillTypeScore: [{name: 'Soft Skills', y: 80.7}, {name: 'Tech Skills', y: 75.2},{name: 'Time Hacking Skills', y: 60.0},
            {name: 'Basic Math Skils', y: 90.0},{name: 'Advance Math Skills', y: 84.5}, {name: 'Beta Skills', y: 87.0}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 85.7}, {name: 'Hibernate', y: 55.2},{name: 'SQL', y: 98.0},
            {name: 'Angular', y: 96.3},{name: 'Spring AoP', y: 70.0}, {name: 'Java Concepts', y: 76.6},{name: 'SOAP', y: 80.0},
            {name: 'JDBC', y: 80.0}, {name: 'REST', y: 82.0}],
        violationsByType: [{ name: 'Profanity', y: 15}, { name: 'Dress', y: 14},{ name: 'Attitude', y: 11},
            { name: 'Conduct', y: 13}],
        numApplicantsPassed: 201,
        numApplicantsFailed: 35,
        screener: null
    },
    { 
        hardestQuestions:   [
            "What are the primitive datatypes of Java?",
            "What is referential integrity in SQL?",
            "How do I create an unordered/ordered list in HTML?",
            "What is JSON and the syntax?",
          "What is bundling in angular?"
            ],
        avgSkillTypeScore: [{name: 'Soft Skills', y: 72.5}, {name: 'Tech Skills', y: 78.7},{name: 'Time Hacking Skills', y: 62.8},
            {name: 'Basic Math Skils', y: 92.3},{name: 'Advance Math Skills', y: 81.8}, {name: 'Beta Skills', y: 81.4}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 97.7}, {name: 'Hibernate', y: 73.2},{name: 'SQL', y: 88.0},
            {name: 'Angular', y: 83.3},{name: 'Spring AoP', y: 64.0}, {name: 'Java Concepts', y: 72.6},{name: 'SOAP', y: 80.0},
            {name: 'JDBC', y: 76.0}, {name: 'REST', y: 73.0}],
        violationsByType: [{ name: 'Profanity', y: 18}, { name: 'Dress', y: 16},{ name: 'Attitude', y: 13},
            { name: 'Conduct', y: 16}],
        numApplicantsPassed: 242,
        numApplicantsFailed: 40,
        screener: null,
    },
    { 
        hardestQuestions:   [
            "What are the different access modifiers in Java?",
            "What are the primary JDBC interfaces?",
            "what are the differences between GROUP BY and ORDER BY?",
            "How do I create various form data in HTML?",
            "What is the DOM?"
          ],
        avgSkillTypeScore: [{name: 'Soft Skills', y: 76.5}, {name: 'Tech Skills', y: 84.6},{name: 'Time Hacking Skills', y: 72.3},
            {name: 'Basic Math Skils', y: 99.2},{name: 'Advance Math Skills', y: 93.8}, {name: 'Beta Skills', y: 88.4}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 98.7}, {name: 'Hibernate', y: 77.2},{name: 'SQL', y: 82.0},
            {name: 'Angular', y: 96.3},{name: 'Spring AoP', y: 80.0}, {name: 'Java Concepts', y: 94.6},{name: 'SOAP', y: 82.0},
            {name: 'JDBC', y: 82.0}, {name: 'REST', y: 85.0}],
        violationsByType: [{ name: 'Profanity', y: 25}, { name: 'Dress', y: 23},{ name: 'Attitude', y: 27},
            { name: 'Conduct', y: 27}],
        numApplicantsPassed: 1452,
        numApplicantsFailed: 242,
        screener: null,
    },
    { 
        hardestQuestions:   [
            "What is a static import?",
            "String vs StringBuilder vs StringBuffer?",
            "What is the difference between IN and EXISTS?",
            "What is the difference between a servlet config and servlet context?",
            "What is an event listener?"
          ],
        avgSkillTypeScore: [{name: 'Soft Skills', y: 70.1}, {name: 'Tech Skills', y: 76.7},{name: 'Time Hacking Skills', y: 58.7},
            {name: 'Basic Math Skils', y: 83.6},{name: 'Advance Math Skills', y: 69.4}, {name: 'Beta Skills', y: 77.7}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 88.7}, {name: 'Hibernate', y: 70.2},{name: 'SQL', y: 88.0},
            {name: 'Angular', y: 95.3},{name: 'Spring AoP', y: 70.0}, {name: 'Java Concepts', y: 80.6},{name: 'SOAP', y: 92.0},
            {name: 'JDBC', y: 77.0}, {name: 'REST', y: 89.0}],
        violationsByType: [{ name: 'Profanity', y: 45}, { name: 'Dress', y: 43},{ name: 'Attitude', y: 35},
            { name: 'Conduct', y: 45}],
        numApplicantsPassed: 2956,   
        numApplicantsFailed: 431,
        screener: null,
    }
]; 

export const MockSingleScreeners: ReportData[] = [
    {
        hardestQuestions: [
            "What is the producer and consumer problem?",
            "What are the different assert methods of JUnit?",
            "What are triggers in SQL?",
            "What is bubbling and capturing in Javascript?",
            "What is continuous integration, deployment, and delivery?"
          ], 
        avgSkillTypeScore: [{name: 'Soft Skills', y: 63.7}, {name: 'Tech Skills', y: 54.7},{name: 'Time Hacking Skills', y: 48.6},
            {name: 'Basic Math Skils', y: 74.9},{name: 'Advance Math Skills', y: 62.4}, {name: 'Beta Skills', y: 84.9}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 92.7}, {name: 'Hibernate', y: 66.28},{name: 'SQL', y: 87.5},
            {name: 'Angular', y: 72.3},{name: 'Spring AoP', y: 45.0}, {name: 'Java Concepts', y: 86.6},{name: 'SOAP', y: 97.6}, 
            {name: 'JDBC', y: 91.0}, {name: 'REST', y: 83.2}],
        violationsByType: [{ name: 'Profanity', y: 2}, { name: 'Dress', y: 1},{ name: 'Attitude', y: 4},
            { name: 'Conduct', y: 3}],
        numApplicantsPassed: 22,
        numApplicantsFailed: 7,
        screener: null
    },  
    {
        hardestQuestions: [
            "How do I iterate through a hashmap in Java?",
            "What is normalization?",
            "What is a filter?",
            "In JavaScript what is the difference between var, let, and const?",
            "What are pipes?"
          ], 
        avgSkillTypeScore: [{name: 'Soft Skills', y: 90.3}, {name: 'Tech Skills', y: 87.6},{name: 'Time Hacking Skills', y: 93.5},
            {name: 'Basic Math Skils', y: 94.5},{name: 'Advance Math Skills', y: 90.7}, {name: 'Beta Skills', y: 82.1}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 55.9}, {name: 'Hibernate', y: 79.9},{name: 'SQL', y: 98.0},
            {name: 'Angular', y: 78.2},{name: 'Spring AoP', y: 90.0}, {name: 'Java Concepts', y: 85.4},{name: 'SOAP', y: 81.2}, 
            {name: 'JDBC', y: 82.3}, {name: 'REST', y: 80.4}],
        violationsByType: [{ name: 'Profanity', y: 3}, { name: 'Dress', y: 3},{ name: 'Attitude', y: 6},
            { name: 'Conduct', y: 5}],
        numApplicantsPassed: 35,
        numApplicantsFailed: 10,
        screener: null
    },  
    {
        hardestQuestions: [
            "What is the difference between exception and error in Java?",
            "What is the string pool in Java?",
            "What is synchronization?",
            "What are the properties of a transaction in SQL?",
            "What is XPath?"
          ], 
        avgSkillTypeScore: [{name: 'Soft Skills', y: 76.6}, {name: 'Tech Skills', y: 89.6},{name: 'Time Hacking Skills', y: 67.2},
            {name: 'Basic Math Skils', y: 83.6},{name: 'Advance Math Skills', y: 80.0}, {name: 'Beta Skills', y: 81.6}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 90.7}, {name: 'Hibernate', y: 77.2},{name: 'SQL', y: 66.0},
        {name: 'Angular', y: 89.3},{name: 'Spring AoP', y: 89.0}, {name: 'Java Concepts', y: 90.6},{name: 'SOAP', y: 78.0}, 
        {name: 'JDBC', y: 90.0}, {name: 'REST', y: 81.4}],
        violationsByType: [{ name: 'Profanity', y: 7}, { name: 'Dress', y: 6},{ name: 'Attitude', y: 10},
            { name: 'Conduct', y: 8}],
        numApplicantsPassed: 50,
        numApplicantsFailed: 14,
        screener: null
    },
    {
        hardestQuestions: [
            "What are the various input/delete/get methods for List, Set, and Queue?",
            "How is an iterator different form a ListIterator ?",
            "What are generics ? Why use them ?",
            "What is the diffence between comparator and comparable ?",
            "What is the purpose of the Object class?"
          ], 
        avgSkillTypeScore: [{name: 'Soft Skills', y: 76.1}, {name: 'Tech Skills', y: 80.9},{name: 'Time Hacking Skills', y: 70.0},
            {name: 'Basic Math Skils', y: 69.8},{name: 'Advance Math Skills', y: 65.7}, {name: 'Beta Skills', y: 57.2}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 89.1}, {name: 'Hibernate', y: 79.5},{name: 'SQL', y: 85.3},
            {name: 'Angular', y: 88.3},{name: 'Spring AoP', y: 84.4}, {name: 'Java Concepts', y: 87.3},{name: 'SOAP', y: 90.2}, 
            {name: 'JDBC', y: 89.0}, {name: 'REST', y: 54.0}],
        violationsByType: [{ name: 'Profanity', y: 10}, { name: 'Dress', y: 9},{ name: 'Attitude', y: 13},
            { name: 'Conduct', y: 10}],
        numApplicantsPassed: 12,
        numApplicantsFailed: 3,
        screener: null
    },  
    {
        hardestQuestions: [
            "What are the pillars of object oriented programming, epxlain them.?",
            "What is the different between an abstract class and an interface?",
            "What is CSS?",
            "What is MVC?",
            "What is blackbox vs whitebox testing?"
          ], 
        avgSkillTypeScore: [{name: 'Soft Skills', y: 70.7}, {name: 'Tech Skills', y: 55.2},{name: 'Time Hacking Skills', y: 57.0},
            {name: 'Basic Math Skils', y: 70.0},{name: 'Advance Math Skills', y: 64.5}, {name: 'Beta Skills', y: 65.4}],
        avgBucketTypeScore:  [{name: 'Java Applied', y: 84.3}, {name: 'Hibernate', y: 56.2},{name: 'SQL', y: 97.6},
        {name: 'Angular', y: 91.3},{name: 'Spring AoP', y: 68.3}, {name: 'Java Concepts', y: 77.6},{name: 'SOAP', y: 65.0}, 
        {name: 'JDBC', y: 77.0}, {name: 'REST', y: 92.0}],
        violationsByType: [{ name: 'Profanity', y: 20}, { name: 'Dress', y: 24},{ name: 'Attitude', y: 20},
            { name: 'Conduct', y: 13}],
        numApplicantsPassed: 312,
        numApplicantsFailed: 75,
        screener: null
    },   
    {
        hardestQuestions: [
            "How do I use sub queries in SQL?",
            "What is the printwriter?",
            "What is AJAX?",
            "How do you handle exceptions with SOAP?",
            "What is Postman?"
          ], 
        avgSkillTypeScore: [{name: 'Soft Skills', y: 85.7}, {name: 'Tech Skills', y: 87.5},{name: 'Time Hacking Skills', y: 66.9},
            {name: 'Basic Math Skils', y: 98.0},{name: 'Advance Math Skills', y: 87.5}, {name: 'Beta Skills', y: 77.0}],
        avgBucketTypeScore: [{name: 'Java Applied', y: 88.7}, {name: 'Hibernate', y: 65.2},{name: 'SQL', y: 87.0},
            {name: 'Angular', y: 93.8},{name: 'Spring AoP', y: 78.8}, {name: 'Java Concepts', y: 85.6},{name: 'SOAP', y: 80.0}, 
            {name: 'JDBC', y: 99.0}, {name: 'REST', y: 78.9}],
        violationsByType: [{ name: 'Profanity', y: 40}, { name: 'Dress', y: 35},{ name: 'Attitude', y: 37},
            { name: 'Conduct', y: 20}],
        numApplicantsPassed: 630,
        numApplicantsFailed: 148,
        screener: null
    }
];












  
  
  
  

  

 

 

 

 

 



  
