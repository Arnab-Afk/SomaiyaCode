const problem = [
  // Easy Problems
  {
    status: "Unsolved",
    title: "Two Sum",
    solution: "View Solution",
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
    solution: "View Solution",
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
    solution: "View Solution",
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
    status: "Unsolved",
    title: "Merge Sorted Array",
    solution: "View Solution",
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
    solution: "View Solution",
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
    solution: "View Solution",
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
  {
    status: "Unsolved",
    title: "Longest Substring Without Repeating Characters",
    solution: "View Solution",
    acceptance: "29%",
    difficulty: "Medium",
    description: `
      Given a string s, find the length of the longest substring without repeating characters.
      
      Example 1:
      Input: s = "abcabcbb"
      Output: 3
      Explanation: The answer is "abc", with the length of 3.
      
      Example 2:
      Input: s = "bbbbb"
      Output: 1
      Explanation: The answer is "b", with the length of 1.
      
      Example 3:
      Input: s = "pwwkew"
      Output: 3
      Explanation: The answer is "wke", with the length of 3.
      Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.`,
  },
  {
    status: "Unsolved",
    title: "Search in Rotated Sorted Array",
    solution: "View Solution",
    acceptance: "34%",
    difficulty: "Medium",
    description: `
      There is an integer array nums sorted in ascending order (with distinct values).
      
      Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]].
      
      Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
      
      You must write an algorithm with O(log n) runtime complexity.
      
      Example 1:
      Input: nums = [4,5,6,7,0,1,2], target = 0
      Output: 4
      
      Example 2:
      Input: nums = [4,5,6,7,0,1,2], target = 3
      Output: -1`,
  },
  {
    status: "Unsolved",
    title: "Container With Most Water",
    solution: "View Solution",
    acceptance: "46%",
    difficulty: "Medium",
    description: `
      You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the line i is at (i, 0) and (i, height[i]).
      
      Find two lines that together with the x-axis form a container, such that the container contains the most water.
      
      Return the maximum amount of water a container can store.
      
      Example 1:
      Input: height = [1,8,6,2,5,4,8,3,7]
      Output: 49
      Explanation: The max area of water (between index 1 and 8) is 49.
      
      Example 2:
      Input: height = [1,1]
      Output: 1`,
  },
  {
    status: "Unsolved",
    title: "Group Anagrams",
    solution: "View Solution",
    acceptance: "56%",
    difficulty: "Medium",
    description: `
      Given an array of strings strs, group the anagrams together. You can return the answer in any order.
      
      An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
      
      Example 1:
      Input: strs = ["eat","tea","tan","ate","nat","bat"]
      Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
      
      Example 2:
      Input: strs = [""]
      Output: [[""]]
      
      Example 3:
      Input: strs = ["a"]
      Output: [["a"]]`,
  },

  // Hard Problems
  {
    status: "Unsolved",
    title: "Trapping Rain Water",
    solution: "View Solution",
    acceptance: "47%",
    difficulty: "Hard",
    description: `
      Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
      
      Example 1:
      Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
      Output: 6
      Explanation: The water trapped by the elevation map is represented by the numbers, it can trap 6 units of water.
      
      Example 2:
      Input: height = [4,2,0,3,2,5]
      Output: 9`,
  },
  {
    status: "Unsolved",
    title: "Merge k Sorted Lists",
    solution: "View Solution",
    acceptance: "44%",
    difficulty: "Hard",
    description: `
      You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
      
      Merge all the linked-lists into one sorted linked-list and return it.
      
      Example 1:
      Input: lists = [[1,4,5],[1,3,4],[2,6]]
      Output: [1,1,2,3,4,4,5,6]
      Explanation: The linked-lists are: 1->4->5, 1->3->4, 2->6. Merging them into one sorted list yields 1->1->2->3->4->4->5->6.
      
      Example 2:
      Input: lists = []
      Output: []`,
  },
  {
    status: "Unsolved",
    title: "Longest Valid Parentheses",
    solution: "View Solution",
    acceptance: "36%",
    difficulty: "Hard",
    description: `
      Given a string s containing just the characters '(' and ')', return the length of the longest valid parentheses substring.
      
      Example 1:
      Input: s = "(()"
      Output: 2
      Explanation: The longest valid parentheses substring is "()".
      
      Example 2:
      Input: s = ")()())"
      Output: 4
      Explanation: The longest valid parentheses substring is "()()".
      
      Example 3:
      Input: s = ""
      Output: 0`,
  },
  {
    status: "Unsolved",
    title: "Median of Two Sorted Arrays",
    solution: "View Solution",
    acceptance: "38%",
    difficulty: "Hard",
    description: `
      Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
      
      The overall run time complexity should be O(log (m+n)).
      
      Example 1:
      Input: nums1 = [1,3], nums2 = [2]
      Output: 2.00000
      Explanation: merged array = [1,2,3] and median is 2.
      
      Example 2:
      Input: nums1 = [1,2], nums2 = [3,4]
      Output: 2.50000
      Explanation: merged array = [1,2,3,4] and median is (2+3)/2 = 2.5.`,
  },
  {
    status: "Unsolved",
    title: "First Missing Positive",
    solution: "View Solution",
    acceptance: "40%",
    difficulty: "Hard",
    description: `
      Given an unsorted integer array nums, return the smallest missing positive integer.
      
      You must implement an algorithm that runs in O(n) time and uses O(1) extra space.
      
      Example 1:
      Input: nums = [1,2,0]
      Output: 3
      
      Example 2:
      Input: nums = [3,4,-1,1]
      Output: 2
      
      Example 3:
      Input: nums = [7,8,9,11,12]
      Output: 1`,
  },
];

export default problem;
