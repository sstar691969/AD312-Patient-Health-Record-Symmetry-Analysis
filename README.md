# AD312-Patient-Health-Record-Symmetry-Analysis
Define a singly linked list where each node represents a health metric recorded for a patient on a given day. The node should contain at least the following information: One health metric value (e.g., blood sugar level, heart rate).  A pointer/reference to the next metric in the sequence (or null/None if it is the last metric)


William Anderson

AD312

# Health Record Palindrome

## Overview

This project analyzes patient health records stored in a singly linked list and determines whether the sequence of health metrics forms a symmetrical pattern (palindrome).

A symmetrical sequence may indicate a return to baseline health conditions or recurring patterns in patient data.

---

## Features

- Singly linked list implementation
- Palindrome detection algorithm
- Optimized O(1) space solution
- Jest unit testing
- Edge case handling

---

## Technologies Used

- JavaScript
- Node.js
- Jest

---

## Project Structure

health-record-palindrome/
│
├── src/
│   ├── LinkedList.js
│   └── isHealthRecordSymmetric.js
│
├── tests/
│   └── palindrome.test.js
│
├── README.md
├── package.json

---

## How To Run

Install dependencies:

npm install

Run tests:

npm test

---

## Test Cases

### Normal Cases

✔ Odd palindrome  
✔ Even palindrome  
✔ Non-palindrome  

### Edge Cases

✔ Empty list  
✔ Single node  
✔ Two-node non-palindrome  

---

## Time Complexity

O(n)

The algorithm traverses the linked list linearly.

---

## Space Complexity

O(1)

The linked list is reversed in-place without using additional data structures.

---

## Optimization Discussion

A simpler approach could use an array to compare values, but that would require O(n) extra space.

This implementation improves efficiency by reversing the second half of the linked list in-place, reducing space complexity to O(1).
