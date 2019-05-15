from binarytree import Node

# Convert tree to fibonacci numbers
def fibonacci(a, b , num):
    if num > 0:
        a += b
        return fibonacci(b, a, num - 1) 
    return a
    
# Create a tree based on number of iterations given    
def makeTree(node):
    if node.value > 1:
        node.left = makeTree(Node(node.value - 1))
        node.right = makeTree(Node(node.value - 2))
    return node

a = int(input("Enter number: "))
fibTree = makeTree(Node(a))

for x in fibTree:
    x.value = fibonacci(0, 1, x.value)

print(fibTree)
