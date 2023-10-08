#include<stdio.h>

void swap(int *a , int *b)
{
	int temp=*a;
	*a= *b;
	*b= temp;
}

void main()
{
	int a[7]={7,2,3,8,4,5,1};
	int i,j;
	for(i=1;i<7;i++)
	{
		for(j=i;j>0;j--)
		{
			if (a[j]<a[j-1])
			{
				swap(a+j,a+j-1);
			}
		}
	}
	for(i=0;i<7;i++)
	{
		printf("%d ",*(a+i));
	}
}
