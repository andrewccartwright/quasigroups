#include <iostream>
#include <iomanip>
#include <vector>

using namespace std;

void print(vector <char>);
void check(vector<char>, vector<char>, vector<vector<char>>);
vector<char> translate(vector<char>&, vector<char>&);

int main()
{
    vector<char> loop(25);
    vector<char> per(4);

    int choice;

    cout << "Enter 1 to test isomorphism or 2 to perform a translation:" << endl;
    cin >> choice;


    vector<char> loop1 = {'1','a','b','c','d', 'a','1','c','d','b', 'b','c','d','1','a', 'c','d','a','b','1', 'd','b','1','a','c'};
    vector<char> loop2 = {'1','a','b','c','d', 'a','1','c','d','b', 'b','c','d','a','1', 'c','d','1','b','a', 'd','b','a','1','c'};
    vector<char> loop3 = {'1','a','b','c','d', 'a','1','c','d','b', 'b','d','1','a','c', 'c','b','d','1','a', 'd','c','a','b','1'};
    vector<char> loop4 = {'1','a','b','c','d', 'a','1','c','d','b', 'b','d','a','1','c', 'c','b','d','a','1', 'd','c','1','b','a'};
    vector<char> loop5 = {'1','a','b','c','d', 'a','b','1','d','c', 'b','c','d','1','a', 'c','d','a','b','1', 'd','1','c','a','b'};

    vector<vector<char>> permuts =
    {{'a','b','c','d'},
    {'a','b','d','c'},
    {'a','c','b','d'},
    {'a','c','d','b'},
    {'a','d','b','c'},
    {'a','d','c','b'},
    {'b','a','c','d'},
    {'b','a','d','c'},
    {'b','c','a','d'},
    {'b','c','d','a'},
    {'b','d','a','c'},
    {'b','d','c','a'},
    {'c','a','b','d'},
    {'c','a','d','b'},
    {'c','b','a','d'},
    {'c','b','d','a'},
    {'c','d','a','b'},
    {'c','d','b','a'},
    {'d','a','b','c'},
    {'d','a','c','b'},
    {'d','b','c','a'},
    {'d','c','a','b'},
    {'d','c','b','a'}};

    switch(choice)
    {
        case 1:
            cout << "Enter the Cayley table of the loop:" << endl;
            for(int i = 0; i < 25; i++)
            {
                cin >> loop[i];
            }

            print(loop);

            check(loop,loop1,permuts);
            check(loop,loop2,permuts);
            check(loop,loop3,permuts);
            check(loop,loop4,permuts);
            check(loop,loop5,permuts);
            break;
        case 2:
            cout << "Enter the Cayley table you want to translate:" << endl;
            for(int i = 0; i < 25; i++)
            {
                cin >> loop[i];
            }
            cout << "Enter the permutation you want to use:" << endl;


            for(int i = 0; i < 4; i++)
            {
                cin >> per[i];
            }

            translate(loop, per);

            print(loop);

            break;

        default:
            cout << "Please enter a valid option" << endl;
    }

    //loop = translate(loop, permuts.at(rand()%24));

    // 1 c b d a
    // c 1 d a b
    // b d a 1 c
    // d a c b 1
    // a b 1 c d






}

vector<char> translate(vector<char>& loop, vector<char>& permut)
{
    for(int i = 0; i < loop.size(); i++)
    {
        if(loop.at(i) == 'a')
        {
            loop.at(i) = permut.at(0);
        }
        else if(loop.at(i) == 'b')
        {
            loop.at(i) = permut.at(1);
        }
        else if(loop.at(i) == 'c')
        {
            loop.at(i) = permut.at(2);
        }
        else if(loop.at(i) == 'd')
        {
            loop.at(i) = permut.at(3);
        }

    }

    return loop;
}

void print(vector<char> loop)
{
    cout << "Cayley Table: " << endl;
    for(int i = 0; i < 25; i+=5)
    {
        for(int j = 0; j < 5; j++)
        {
            char x = loop.at(i+j);

            cout << setw(3) << x << " ";
        }
        cout << endl;
    }

    cout << endl;
}

void check(vector<char> loop, vector<char> loop2, vector<vector<char>> permuts)
{
    bool same = true;
    vector<char> temp = loop2;


    for(int i = 0; i < permuts.size(); i++)
    {
        for(int j = 0; j < loop2.size(); j++)
        {
            if(loop2.at(j) == 'a')
            {
                loop2.at(j) = permuts.at(i).at(0);
            }
            else if(loop2.at(j) == 'b')
            {
                loop2.at(j) = permuts.at(i).at(1);
            }
            else if(loop2.at(j) == 'c')
            {
                loop2.at(j) = permuts.at(i).at(2);
            }
            else if(loop2.at(j) == 'd')
            {
                loop2.at(j) = permuts.at(i).at(3);
            }

            for(int k = 0; k < loop2.size(); k++)
            {
                if(loop2.at(k) != loop.at(k))
                {
                    same = false;
                    break;
                }
                same = true;
            }
        }


        loop2 = temp;

        if(same)
        {
            cout << "The loop is isomorphic to" << endl;
            print(loop2);
            break;
        }

    }


}
