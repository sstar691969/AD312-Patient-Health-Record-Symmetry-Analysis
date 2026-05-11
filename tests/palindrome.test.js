

import { ListNode } from "../src/LinkedList.js";
import { isHealthRecordSymmetric } from "../src/isHealthRecordSymmetric.js";

function buildList(arr) {

  if (arr.length === 0) {
    return null;
  }

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

describe("Health Record Symmetry Tests", () => {

  // ✅ NORMAL TESTS

  test("Odd palindrome", () => {
    const head = buildList([70, 80, 90, 80, 70]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test("Even palindrome", () => {
    const head = buildList([70, 80, 80, 70]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test("Not palindrome", () => {
    const head = buildList([70, 80, 95]);
    expect(isHealthRecordSymmetric(head)).toBe(false);
  });

  // ✅ EDGE CASES

  test("Single node", () => {
    const head = buildList([70]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test("Empty list", () => {
    const head = buildList([]);
    expect(isHealthRecordSymmetric(head)).toBe(true);
  });

  test("Two different nodes", () => {
    const head = buildList([70, 80]);
    expect(isHealthRecordSymmetric(head)).toBe(false);
  });

});