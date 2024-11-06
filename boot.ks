print "Something".
until ship:apoapsis > 100000{
    lock retrograde to 1.
    print retrograde.
}

function launch{
    parameter y.
    print "o que é " + y + "?".
}

print "Ola, este é o computador da nave h145632".

print ship:shipname.

launch(15).

// this is Kos programming language, kerboscript to control spaceships! :)

local x is 13.

wait 1000.

print "quem é o candidato " + x + "?".
wait until stage:ready.