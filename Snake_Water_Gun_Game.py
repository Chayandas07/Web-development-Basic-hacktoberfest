
import random

print("Player no.1- choose snake(1) , water(2) or gun(3)")

comp = random.randint(1,3)
 
you = input("Player no.2- choose snake(s) , water(w) or gun(g)")
if comp == 1:
    comp = "s"  
elif comp == 2:
    comp = "w"  
elif comp == 3:
    comp = "g"  
def gamewin(comp,you):
    
    # by chance if both you and comp choose same thing
    if comp == you:
        return None
    # check for  all posibilities when comp choose snake(s) 
    if comp=="s":
        if you == "w":
            return False
        elif you == "g":
            return True
    # if computer has snake and you choose water then you will loose 
    # so it will return false and if you have gun then return true 
    # this means you win  
    
    # check for  all posibilities when comp choose water(w) 
    elif comp=="w":
        if you == "g":
            return False
        elif you == "s":
            return True
    
    # check for  all posibilities when comp choose gun(g)
    elif comp=="g":
        if you == "s":
            return False
        elif you == "w":
            return True

s = gamewin(comp,you)
 
print("the vlaue choosen by computer",comp)         
print("the vlaue choosen by you",you)         
# this will print what computer and you have choosen
# ( in case you wnated to know)
if s == None:
    print(" the game has tie!!!!")
elif s == True:
    print("You win the game!!")
else :
    print("You loose the game !!")