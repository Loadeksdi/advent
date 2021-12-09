#include <stdlib.h>
#include <stdio.h>

int *handleFileParsing()
{
    FILE *fp;
    fp = fopen("input.txt", "r");
    int iter;
    int *fishes = (int *)malloc(301 * sizeof(int));
    for (iter = 0; iter < 300; iter++)
    {
        fscanf(fp, "%d,", &fishes[iter]);
    }
    fclose(fp);
    fishes[iter] = -1;
    return fishes;
}

unsigned long long simulateLanternfishsEvolution(int days)
{
    int *fishes = handleFileParsing();
    unsigned long long newFishes = 0;
    for (int i = 0; i < days; i++)
    {
        unsigned long long cpt = 0;
        unsigned long long j = 0;
        while (fishes[j] != -1)
        {
            if (fishes[j] == 0)
            {
                cpt++;
            }
            j++;
        }
        newFishes = cpt;
        unsigned long long k = 0;
        while (fishes[k] != -1)
        {
            if (fishes[i] > 0)
            {
                fishes[i]--;
            }
            else
            {
                fishes[i] = 6;
            }
            k++;
        }
        if (newFishes > 0)
        {
            while (fishes[k] != -1)
            {
                k++;
            }
            fishes = realloc(fishes, ((k + newFishes) * sizeof(int)));
            unsigned long long l = 0;
            while (l < newFishes)
            {
                fishes[k + l] = 8;
                l++;
            }
            fishes[k + l] = -1;
        }
    }
    unsigned long long finalLength = 0;
    while (fishes[finalLength] != -1)
    {
        finalLength++;
    }
    free(fishes);
    return finalLength;
}

int main()
{
    printf("Value is %llu", simulateLanternfishsEvolution(80));
    return 0;
}