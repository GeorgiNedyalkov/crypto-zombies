## Contract Crypto Zombies

A Smart Contract contract for creating crypto zombies called "Zombie Factory".

 * The Factory maintains a database of all zombies in the army.
 * The Factory can create new zombies
 * Each Zombie has a random and unique appearance

 Zombies have DNA which is a 16-digit integer like:
 ```
8356281049284737
 ```

Zombies have 7 different traits. Each pair of two digits specify a certain trait. For example:
The first two digits 83 map to the zombie head. It's calculated like this:

83 % 7 + 1 = 7. 

So the Zombie head type is 7.