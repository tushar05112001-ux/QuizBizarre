const questions = [
  {
    question: 'What is the primary purpose of creating an index in MongoDB?',
    options: [
      'To encrypt data at rest for security purposes',
      'To improve the performance of read operations by reducing the amount of data scanned',
      'To automatically compress collections and save disk space',
      'To enforce strict schema validation on incoming documents'
    ],
    correctAnswer: 'To improve the performance of read operations by reducing the amount of data scanned',
    explanation: 'Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan (i.e., scan every document in a collection) to select documents that match the query statement.'
  },
  {
    question: 'By default, what type of index does MongoDB create on the `_id` field when a collection is created?',
    options: [
      'Text Index',
      'Compound Index',
      'Hashed Index',
      'Unique B-tree Index'
    ],
    correctAnswer: 'Unique B-tree Index',
    explanation: 'MongoDB creates a unique index on the `_id` field during the creation of a collection. This index prevents clients from inserting two documents with the same value for the `_id` field.'
  },
  {
    question: 'What is a Compound Index in MongoDB?',
    options: [
      'An index that combines data from multiple completely separate collections',
      'An index that holds references to multiple fields within a single collection',
      'An index that automatically shards data across multiple cluster nodes',
      'An index that encrypts multiple sensitive fields simultaneously'
    ],
    correctAnswer: 'An index that holds references to multiple fields within a single collection',
    explanation: 'A compound index is an index on a collection that consists of multiple fields. This allows queries that filter or sort by multiple fields to execute efficiently.'
  }
];

export default questions;
