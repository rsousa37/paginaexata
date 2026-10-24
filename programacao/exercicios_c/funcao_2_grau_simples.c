/**********************************************************
 *    Gráfico simples de uma função do segundo grau y=x^2 *
 *    Autor: Robson S. de Sousa                           *
 *    23/10/2026                                          *
 **********************************************************/
#include <stdio.h>
#include <math.h>
int main() {
    // Inícia do intervalo dos valores de x
    int x=-8;
    // Loop das linhas de plotagem
    for (int i=0; i<=16; i++)
        {
            // Plotagem dos pontos (x,y)
            for (int y=0;y<=pow(x,2); y++)
                {
                    //Se o valor de y<x^2 então exibe um espaço, quando y=x^2 exibe um * que representa o ponto (x,x^2)
                    if (y<pow(x,2))
                    {
                        printf(" ");
                    }
                    else
                    {
                        printf("*\n");
                    }
                }
            // Avança o valor de x
            x++;
        }
}
