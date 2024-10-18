const problem = [
  // Easy Problems
  {
    status: "Unsolved",
    title: "Two Sum",
    solutions: {
      C: {
        code: '#include <stdio.h>\n#include <stdlib.h>\n\nint* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    int *result = (int*)malloc(2 * sizeof(int));\n    *returnSize = 2;\n    for (int i = 0; i < numsSize; i++) {\n        for (int j = i + 1; j < numsSize; j++) {\n            if (nums[i] + nums[j] == target) {\n                result[0] = i;\n                result[1] = j;\n                return result;\n            }\n        }\n    }\n    return NULL;\n}\n\nint main() {\n    int nums[] = {2, 7, 11, 15};\n    int target = 9;\n    int returnSize;\n    int* indices = twoSum(nums, 4, target, &returnSize);\n    printf("Indices: %d, %d\\n", indices[0], indices[1]);\n    free(indices);\n    return 0;\n}',
        output: "Indices: 0, 1",
      },
      "C++": {
        code: '#include <iostream>\n#include <unordered_map>\n#include <vector>\n\nstd::vector<int> twoSum(std::vector<int>& nums, int target) {\n    std::unordered_map<int, int> numMap;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (numMap.find(complement) != numMap.end()) {\n            return {numMap[complement], i};\n        }\n        numMap[nums[i]] = i;\n    }\n    return {};\n}\n\nint main() {\n    std::vector<int> nums = {2, 7, 11, 15};\n    int target = 9;\n    std::vector<int> indices = twoSum(nums, target);\n    std::cout << "Indices: " << indices[0] << ", " << indices[1] << std::endl;\n    return 0;\n}',
        output: "Indices: 0, 1",
      },
      Python: {
        code: "def two_sum(nums, target):\n    num_map = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in num_map:\n            return [num_map[complement], i]\n        num_map[num] = i\n\nnums = [2, 7, 11, 15]\ntarget = 9\nindices = two_sum(nums, target)\nprint('Indices:', indices)",
        output: "Indices: [0, 1]",
      },
      Java: {
        code: 'import java.util.HashMap;\nimport java.util.Map;\n\npublic class TwoSum {\n    public static int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> numMap = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (numMap.containsKey(complement)) {\n                return new int[] { numMap.get(complement), i };\n            }\n            numMap.put(nums[i], i);\n        }\n        return new int[]{};\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {2, 7, 11, 15};\n        int target = 9;\n        int[] indices = twoSum(nums, target);\n        System.out.println("Indices: " + indices[0] + ", " + indices[1]);\n    }\n}',
        output: "Indices: 0, 1",
      },
    },
    acceptance: "45%",
    difficulty: "Easy",
    description: `
      Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
      
      You may assume that each input would have exactly one solution, and you may not use the same element twice.
      
      You can return the answer in any order.
      
      Example 1:
      Input: nums = [2, 7, 11, 15], target = 9
      Output: [0, 1]
      Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
      
      Example 2:
      Input: nums = [3, 2, 4], target = 6
      Output: [1, 2]
      
      Example 3:
      Input: nums = [3, 3], target = 6
      Output: [0, 1]`,
  },
  {
    status: "Unsolved",
    title: "Valid Parentheses",
    solutions: {
      C: {
        code: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint isValid(char * s) {\n    int len = strlen(s);\n    char *stack = (char *)malloc(len + 1);\n    int top = -1;\n    for (int i = 0; i < len; i++) {\n        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {\n            stack[++top] = s[i];\n        } else {\n            if (top == -1) return 0;\n            char c = stack[top--];\n            if ((s[i] == ')' && c != '(') || (s[i] == '}' && c != '{') || (s[i] == ']' && c != '[')) {\n                free(stack);\n                return 0;\n            }\n        }\n    }\n    int valid = top == -1;\n    free(stack);\n    return valid;\n}\n\nint main() {\n    char *s = \"()[]{}\";\n    printf(\"Valid: %d\\n\", isValid(s));\n    return 0;\n}",
        output: "Valid: 1",
      },
      "C++": {
        code: "#include <iostream>\n#include <stack>\n#include <string>\n\nbool isValid(std::string s) {\n    std::stack<char> stack;\n    for (char c : s) {\n        if (c == '(' || c == '{' || c == '[') {\n            stack.push(c);\n        } else {\n            if (stack.empty()) return false;\n            char top = stack.top();\n            stack.pop();\n            if ((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) {\n                return false;\n            }\n        }\n    }\n    return stack.empty();\n}\n\nint main() {\n    std::string s = \"()[]{}\";\n    std::cout << \"Valid: \" << isValid(s) << std::endl;\n    return 0;\n}",
        output: "Valid: 1",
      },
      Python: {
        code: "def is_valid(s):\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top_element = stack.pop() if stack else '#'\n            if mapping[char] != top_element:\n                return False\n        else:\n            stack.append(char)\n    return not stack\n\ns = \"()[]{}\"\nprint('Valid:', is_valid(s))",
        output: "Valid: True",
      },
      Java: {
        code: "import java.util.Stack;\n\npublic class ValidParentheses {\n    public static boolean isValid(String s) {\n        Stack<Character> stack = new Stack<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(' || c == '{' || c == '[') {\n                stack.push(c);\n            } else {\n                if (stack.isEmpty()) return false;\n                char top = stack.pop();\n                if ((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) {\n                    return false;\n                }\n            }\n        }\n        return stack.isEmpty();\n    }\n\n    public static void main(String[] args) {\n        String s = \"()[]{}\";\n        System.out.println(\"Valid: \" + isValid(s));\n    }\n}",
        output: "Valid: true",
      },
    },
    acceptance: "48%",
    difficulty: "Easy",
    description: `
      Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
      
      An input string is valid if:
      - Open brackets must be closed by the same type of brackets.
      - Open brackets must be closed in the correct order.
      
      Example 1:
      Input: s = "()"
      Output: true
      
      Example 2:
      Input: s = "()[]{}"
      Output: true
      
      Example 3:
      Input: s = "(]"
      Output: false`,
  },
  {
    status: "Unsolved",
    title: "Remove Duplicates from Sorted Array",
    solutions: {
      C: {
        code: '#include <stdio.h>\n\nint removeDuplicates(int* nums, int numsSize) {\n    if (numsSize == 0) return 0;\n    int uniqueCount = 1;\n    for (int i = 1; i < numsSize; i++) {\n        if (nums[i] != nums[uniqueCount - 1]) {\n            nums[uniqueCount] = nums[i];\n            uniqueCount++;\n        }\n    }\n    return uniqueCount;\n}\n\nint main() {\n    int nums[] = {1, 1, 2};\n    int newSize = removeDuplicates(nums, 3);\n    printf("New Size: %d\\n", newSize);\n    return 0;\n}',
        output: "New Size: 2",
      },
      "C++": {
        code: '#include <iostream>\n#include <vector>\n\nint removeDuplicates(std::vector<int>& nums) {\n    if (nums.empty()) return 0;\n    int uniqueCount = 1;\n    for (int i = 1; i < nums.size(); i++) {\n        if (nums[i] != nums[uniqueCount - 1]) {\n            nums[uniqueCount] = nums[i];\n            uniqueCount++;\n        }\n    }\n    return uniqueCount;\n}\n\nint main() {\n    std::vector<int> nums = {1, 1, 2};\n    int newSize = removeDuplicates(nums);\n    std::cout << "New Size: " << newSize << std::endl;\n    return 0;\n}',
        output: "New Size: 2",
      },
      Python: {
        code: "def remove_duplicates(nums):\n    if not nums:\n        return 0\n    unique_count = 1\n    for i in range(1, len(nums)):\n        if nums[i] != nums[unique_count - 1]:\n            nums[unique_count] = nums[i]\n            unique_count += 1\n    return unique_count\n\nnums = [1, 1, 2]\nnew_size = remove_duplicates(nums)\nprint('New Size:', new_size)",
        output: "New Size: 2",
      },
      Java: {
        code: 'import java.util.Arrays;\n\npublic class RemoveDuplicates {\n    public static int removeDuplicates(int[] nums) {\n        if (nums.length == 0) return 0;\n        int uniqueCount = 1;\n        for (int i = 1; i < nums.length; i++) {\n            if (nums[i] != nums[uniqueCount - 1]) {\n                nums[uniqueCount] = nums[i];\n                uniqueCount++;\n            }\n        }\n        return uniqueCount;\n    }\n\n    public static void main(String[] args) {\n        int[] nums = {1, 1, 2};\n        int newSize = removeDuplicates(nums);\n        System.out.println("New Size: " + newSize);\n    }\n}',
        output: "New Size: 2",
      },
    },
    acceptance: "51%",
    difficulty: "Easy",
    description: `
      Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
      
      The relative order of the elements should be kept the same.
      
      Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
      
      Example 1:
      Input: nums = [1, 1, 2]
      Output: 2, nums = [1, 2, _]
      Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
      
      Example 2:
      Input: nums = [0,0,1,1,2,2,3,3,4]
      Output: 5, nums = [0,1,2,3,4,_]`,
  },
  {
    title: "Merged Array",
    status: "Unsolved",
    solutions: {
      C: {
        code: '#include <stdio.h>\n\nvoid merge(int* nums1, int m, int* nums2, int n) {\n    int i = m - 1, j = n - 1, k = m + n - 1;\n    while (i >= 0 && j >= 0) {\n        if (nums1[i] > nums2[j]) {\n            nums1[k--] = nums1[i--];\n        } else {\n            nums1[k--] = nums2[j--];\n        }\n    }\n    while (j >= 0) {\n        nums1[k--] = nums2[j--];\n    }\n}\n\nint main() {\n    int nums1[6] = {1, 2, 3, 0, 0, 0};\n    int nums2[] = {2, 5, 6};\n    merge(nums1, 3, nums2, 3);\n    printf("Merged Array: ");\n    for (int i = 0; i < 6; i++) {\n        printf("%d ", nums1[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
        output: "Merged Array: 1 2 2 3 5 6",
      },
      "C++": {
        code: "#include <iostream>\n#include <vector>\n\nvoid merge(std::vector<int>& nums1, int m, std::vector<int>& nums2, int n) {\n    int i = m - 1, j = n - 1, k = m + n - 1;\n    while (i >= 0 && j >= 0) {\n        if (nums1[i] > nums2[j]) {\n            nums1[k--] = nums1[i--];\n        } else {\n            nums1[k--] = nums2[j--];\n        }\n    }\n    while (j >= 0) {\n        nums1[k--] = nums2[j--];\n    }\n}\n\nint main() {\n    std::vector<int> nums1 = {1, 2, 3, 0, 0, 0};\n    std::vector<int> nums2 = {2, 5, 6};\n    merge(nums1, 3, nums2, 3);\n    std::cout << \"Merged Array: \";\n    for (int num : nums1) {\n        std::cout << num << ' ';\n    }\n    std::cout << std::endl;\n    return 0;\n}",
        output: "Merged Array: 1 2 2 3 5 6",
      },
      Python: {
        code: "def merge(nums1, m, nums2, n):\n    i, j, k = m - 1, n - 1, m + n - 1\n    while i >= 0 and j >= 0:\n        if nums1[i] > nums2[j]:\n            nums1[k] = nums1[i]\n            i -= 1\n        else:\n            nums1[k] = nums2[j]\n            j -= 1\n        k -= 1\n    while j >= 0:\n        nums1[k] = nums2[j]\n        j -= 1\n        k -= 1\n\nnums1 = [1, 2, 3, 0, 0, 0]\nn = 3\nnums2 = [2, 5, 6]\nmerge(nums1, 3, nums2, n)\nprint('Merged Array:', nums1)",
        output: "Merged Array: [1, 2, 2, 3, 5, 6]",
      },
      Java: {
        code: 'import java.util.Arrays;\n\npublic class MergeSortedArray {\n    public static void merge(int[] nums1, int m, int[] nums2, int n) {\n        int i = m - 1, j = n - 1, k = m + n - 1;\n        while (i >= 0 && j >= 0) {\n            if (nums1[i] > nums2[j]) {\n                nums1[k--] = nums1[i--];\n            } else {\n                nums1[k--] = nums2[j--];\n            }\n        }\n        while (j >= 0) {\n            nums1[k--] = nums2[j--];\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] nums1 = {1, 2, 3, 0, 0, 0};\n        int[] nums2 = {2, 5, 6};\n        merge(nums1, 3, nums2, 3);\n        System.out.println("Merged Array: " + Arrays.toString(nums1));\n    }\n}',
        output: "Merged Array: [1, 2, 2, 3, 5, 6]",
      },
    },
    // solution: "View Solution",
    acceptance: "41%",
    difficulty: "Easy",
    description: `
      You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
      
      Merge nums1 and nums2 into a single array sorted in non-decreasing order.
      
      The merged array should be placed inside the array nums1, which has a length of m + n, such that it contains the elements of both arrays.
      
      Example 1:
      Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
      Output: [1,2,2,3,5,6]
      
      Example 2:
      Input: nums1 = [1], m = 1, nums2 = [], n = 0
      Output: [1]`,
  },
  {
    status: "Unsolved",
    title: "Climbing Stairs",
    solutions: {
      C: {
        code: '#include <stdio.h>\n\nint climbStairs(int n) {\n    if (n <= 2) return n;\n    int first = 1, second = 2, third;\n    for (int i = 3; i <= n; i++) {\n        third = first + second;\n        first = second;\n        second = third;\n    }\n    return second;\n}\n\nint main() {\n    int n = 5;\n    printf("Ways to climb: %d\\n", climbStairs(n));\n    return 0;\n}',
        output: "Ways to climb: 8",
      },
      "C++": {
        code: '#include <iostream>\n\nint climbStairs(int n) {\n    if (n <= 2) return n;\n    int first = 1, second = 2, third;\n    for (int i = 3; i <= n; i++) {\n        third = first + second;\n        first = second;\n        second = third;\n    }\n    return second;\n}\n\nint main() {\n    int n = 5;\n    std::cout << "Ways to climb: " << climbStairs(n) << std::endl;\n    return 0;\n}',
        output: "Ways to climb: 8",
      },
      Python: {
        code: "def climb_stairs(n):\n    if n <= 2:\n        return n\n    first, second = 1, 2\n    for _ in range(3, n + 1):\n        first, second = second, first + second\n    return second\n\nn = 5\nprint('Ways to climb:', climb_stairs(n))",
        output: "Ways to climb: 8",
      },
      Java: {
        code: 'public class ClimbingStairs {\n    public static int climbStairs(int n) {\n        if (n <= 2) return n;\n        int first = 1, second = 2;\n        for (int i = 3; i <= n; i++) {\n            int third = first + second;\n            first = second;\n            second = third;\n        }\n        return second;\n    }\n\n    public static void main(String[] args) {\n        int n = 5;\n        System.out.println("Ways to climb: " + climbStairs(n));\n    }\n}',
        output: "Ways to climb: 8",
      },
    },
    acceptance: "60%",
    difficulty: "Easy",
    description: `
      You are climbing a staircase. It takes n steps to reach the top.
      
      Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
      
      Example 1:
      Input: n = 2
      Output: 2
      Explanation: There are two ways to climb to the top: 1 step + 1 step or 2 steps.
      
      Example 2:
      Input: n = 3
      Output: 3
      Explanation: There are three ways to climb to the top: 1 step + 1 step + 1 step, 1 step + 2 steps, or 2 steps + 1 step.`,
  },

  // Medium Problems
  {
    status: "Unsolved",
    title: "Add Two Numbers",
    solutions: {
      C: {
        code: `
          struct ListNode {
              int val;
              struct ListNode *next;
              ListNode(int x) : val(x), next(NULL) {}
          };

          struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
              struct ListNode* dummy = new ListNode(0);
              struct ListNode* p = dummy;
              int carry = 0;

              while (l1 != NULL || l2 != NULL || carry) {
                  int sum = carry;
                  if (l1 != NULL) {
                      sum += l1->val;
                      l1 = l1->next;
                  }
                  if (l2 != NULL) {
                      sum += l2->val;
                      l2 = l2->next;
                  }
                  carry = sum / 10;
                  p->next = new ListNode(sum % 10);
                  p = p->next;
              }
              return dummy->next;
          }`,
      },
      "C++": {
        code: `
          struct ListNode {
              int val;
              ListNode *next;
              ListNode(int x) : val(x), next(NULL) {}
          };

          ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
              ListNode* dummy = new ListNode(0);
              ListNode* p = dummy;
              int carry = 0;

              while (l1 != NULL || l2 != NULL || carry) {
                  int sum = carry;
                  if (l1 != NULL) {
                      sum += l1->val;
                      l1 = l1->next;
                  }
                  if (l2 != NULL) {
                      sum += l2->val;
                      l2 = l2->next;
                  }
                  carry = sum / 10;
                  p->next = new ListNode(sum % 10);
                  p = p->next;
              }
              return dummy->next;
          }`,
      },
      Python: {
        code: `
          class ListNode:
              def __init__(self, val=0, next=None):
                  self.val = val
                  self.next = next

          def addTwoNumbers(l1, l2):
              dummy = ListNode(0)
              p = dummy
              carry = 0

              while l1 or l2 or carry:
                  sum = carry
                  if l1:
                      sum += l1.val
                      l1 = l1.next
                  if l2:
                      sum += l2.val
                      l2 = l2.next
                  carry = sum // 10
                  p.next = ListNode(sum % 10)
                  p = p.next
              return dummy.next`,
      },
      Java: {
        code: `
          class ListNode {
              int val;
              ListNode next;
              ListNode(int x) { val = x; }
          }

          public class Solution {
              public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
                  ListNode dummy = new ListNode(0);
                  ListNode p = dummy;
                  int carry = 0;

                  while (l1 != null || l2 != null || carry != 0) {
                      int sum = carry;
                      if (l1 != null) {
                          sum += l1.val;
                          l1 = l1.next;
                      }
                      if (l2 != null) {
                          sum += l2.val;
                          l2 = l2.next;
                      }
                      carry = sum / 10;
                      p.next = new ListNode(sum % 10);
                      p = p.next;
                  }
                  return dummy.next;
              }
          }`,
      },
    },
    acceptance: "32%",
    difficulty: "Medium",
    description: `
      You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.
      
      Add the two numbers and return it as a linked list.
      
      You may assume the two numbers do not contain any leading zero, except the number 0 itself.
      
      Example 1:
      Input: l1 = [2,4,3], l2 = [5,6,4]
      Output: [7,0,8]
      Explanation: 342 + 465 = 807.
      
      Example 2:
      Input: l1 = [0], l2 = [0]
      Output: [0]`,
  },
];

export default problem;
