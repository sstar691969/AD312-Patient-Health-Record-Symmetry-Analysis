
export function isHealthRecordSymmetric(head) {

    // Empty list or single node
    if (!head || !head.next) {
      return true;
    }
  
    let slow = head;
    let fast = head;
  
    // Find middle of list
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse second half
    let prev = null;
  
    while (slow) {
      let nextTemp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = nextTemp;
    }
  
    // Compare first and second half
    let left = head;
    let right = prev;
  
    while (right) {
  
      if (left.value !== right.value) {
        return false;
      }
  
      left = left.next;
      right = right.next;
    }
  
    return true;
  }