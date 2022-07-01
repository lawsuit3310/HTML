#include"master.h"
#include <ncurses.h>

int main(void)
{
    //object();
    move(0,0);
    printw("hello");
    move(1,0);
    printw("Hi");
    move(2,0);
    printw("bye");
    refresh();
    getch();
    endwin();
    return 0;
}