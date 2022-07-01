objects = main.o object.o
CFLAGS = -g -c

test : ${objects}
	gcc -o test ${objects} -lncurses

main.o : main.c
	gcc -c main.c

object.o : object.c
	gcc -c object.c

clean :
	rm *.o test

run :
	./test
