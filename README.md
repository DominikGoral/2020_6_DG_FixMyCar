# 2020_6_DG_FixMyCar
Celem aplikacji webowej jest wsparcie warsztatów samochodowych w zakresie efektywnego zarządzania czasem oraz promocji oferowanych usług. Aplikacja umożliwiać powinna właścicielom warsztatów samochodowych na utworzenie własnej witryny swojego warsztatu oraz zarządzanie nią. Użytkownicy korzystający z serwisu powinni mieć możliwość przeglądania warsztatów samochodowych, oceniania ich oraz wystawiania komentarzy. Ponadto powinni mieć możliwość rezerwacji dogodnego terminu wizyty w warsztacie oraz uiszczenie opłaty online.
Mechanicy udostępniać będą harmonogram pracy aby klienci mogli się umawiać na wizyty bez konieczności bezpośredniego kontaktu. Po odbytej wstępnej wizycie mechanik po dokonaniu wstępnej diagnostyki prześle klientowi wycenę napraw, którą klient będzie mógł zaakceptować lub odrzucić. Po akceptacji zlecenie otrzyma status „W naprawie” a po jej zakończeniu mechanik zmieni go na „Gotowe do odebrania”. Sam kontakt także będzie umożliwiony - klient będzie mógł bezpośrednio porozmawiać z właścicielem warsztatu.
Warsztaty będą ukazane na mapie.

Wymagania podstawowe:
-	możliwość zarejestrowania się (wersja dla mechaników i dla kierowców)- implementacja formularzy i mechanizmów do rejestracji,
-	możliwość zalogowania się- implementacja logowania na początku tylko w oparciu o dane z bazy, a ewentualnie później z wykorzystaniem Facebook’ a,
-	możliwość edytowania danych o profilu- implementacja sekcji mój profil w
której będą wyświetlone informacje o profilu i możliwość ich edytowania (    mowa o edytowaniu niektórych danych jak np. hasło)
-	możliwość zobaczenia wszystkich warsztatów- implementacja wyszukiwania warsztatów,
-	możliwość filtrowania wyników wyszukiwania- implementacja filtrowania
m.in. po odległości od warsztatu, ocenach, specjalizacji warsztatu, cenniku usług, dostępności w najbliższym okresie,
-	możliwość oceniania warsztatów- implementacja możliwości oceniania warsztatów jak i komentowania ich,
-	możliwość wprowadzania informacji o swoich pojazdach- implementacja sekcji moje pojazdy, w niej będziemy mogli gromadzić nasze pojazdy, które potem będziemy rejestrować w harmonogramie warsztatów jeśli będziemy chcieli zarezerwować wizytę,
-	możliwość zarezerwowania wizyty w warsztacie- na początku będzie to tylko rezerwacja, bez żadnych opłat. Klient będzie mógł wybrać z dostępnych godzin czas, który mu odpowiada i umówić się. Zaimplementowana będzie także możliwość przeniesienia rezerwacji. Każdy warsztat będzie mógł
określić do kiedy można dokonać zmiany terminu wizyty. Jeśli czas pozwoli to dodamy opłaty za rezerwację, jednak potrzebny jest do tego jakiś serwer płatności. Pozwoli to na uniknięcie sytuacji w której ktoś rezerwował by wizytę i się nie pojawiał,
-	możliwość ustalenia harmonogramu i dostępnych wizyt (od strony mechanika)- Implementacja możliwości ustalenia godzin dostępnych dla klientów w których warsztat ma jeszcze wolne miejsca. Warsztat też może tak jakby zajmować miejsca w harmonogramie, gdyż klienci mogą rezerwować wizyty telefonicznie,  
Wymagania dodatkowe:
-	wyświetlenie warsztatów w okolicy na mapie- implementacja integracji z google maps i zaznaczanie warsztatów na mapie,
-	możliwość ustalenia cennika, wykonywanych prac- Implementacja formularzy za pomocą których warsztat będzie mógł dodać usługi i ich ceny,
-	możliwość komunikacji między klientem, a warsztatem i składania propozycji do zaakceptowania w sprawie dodatkowych koniecznych napraw-
Implementacja komunikacji między klientem, a warsztatem. Warsztat wysyła do akceptacji jakąś dodatkową naprawę, która jest stwierdzona po oględzinach pojazdu. Klient może zaakceptować lub odrzucić. Aby wszystko odbywało się sprawnie aplikacja będzie wysyłała powiadomienie w formie sms- a z linkiem do strony w celu potwierdzenia lub odrzucenia. Klient będzie też mógł zadzwonić do warsztatu i telefonicznie potwierdzić. W takim wypadku warsztat sam potwierdzi za klienta propozycję naprawy,
-	możliwość logowania i rejestracji za pomocą Google i Facebook- Rozszerzenie możliwości logowania się za pomocą Facebook’ a.
-	możliwość uiszczenia opłaty online- Implementacja możliwości płatności za rezerwacje wizyty i za usługi. Ma to na celu ograniczenie sytuacji w których ktoś rezygnuje z rezerwacji albo bez powiadamiania nie przyjeżdża.

Diagram przypadków użycia:
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/diagram_pu.png)

Schemat bazy danych:    
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/baza_danych.jpg)

Architektura aplikacji 
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/architektura_aplikacji.jpg) 

Technologie:  
Backend: Node.js  (Express.js, BCrypt, Sequelize)
Frontend: React.js  (Redux, React- Router, React-icons)
Baza danych: MySQL
Zostało użyte także Google javascript map API

Funkcjonalności:
Logowanie zostało zrobione z wykorzystaniem bcrypt i jsonwebtoken. 
Wykorzystałem te dwa narzędzia aby nie korzystać z sesji tylko przechowywać token, który wygasa po określonym w kodzie czasie. Bcrypt został użyty dla bezpieczeństwa przechowywania danych w bazie. Hasła są szyfrowane i zapisywane do bazy danych. 
Jeśli chodzi o stronę frontendową to logowanie jest zrealizowane z wykorzystaniem redux- a. Biblioteka ta pozwala mi na zdefiniowanie store w którym mam globalne zmienne dla aplikacji. Przechowuję tam token, który pozwala w dalszej części na ograniczenie dostępu niektórym użytkownikom, którzy nie posiadają uprawnień do wybranych ścieżek.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/logowanie_1.png)
 
Gdy przełączymy toggle button ,, Mam już konto” pojawia się formularz do rejestracji. Formularz jest walidowany i jesteśmy informowani o błędzie poprzez podkreślenie kontrolki input czerwoną linią ( tzn. zmieniany jest kolor dolnej krawędzi.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/rejestracja_1.png)
 
Gdy wprowadzimy niepoprawne dane jesteśmy informowani o błędzie za pomocą Toasta, w prawym górnym rogu.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/logowanie_2.png)
 
Po wejściu na stronę możemy zobaczyć wylistowane warsztaty, natomiast po kliknięciu w konkretny zakład jesteśmy przeniesieni do ekranu logowania ( oczywiście gdy nie jesteśmy zalogowani)
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/wszystkie_warsztaty.png)
 
Po zalogowaniu jesteśmy przeniesieni na stronę na której mamy wylistowane warsztaty, natomiast został zmieniony pasek nawigacyjny na górze.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/wszystkie_warsztaty_2.png)
 
Możemy filtrować wszystkie dostępne warsztaty.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/wszystkie_warsztaty_3.png)
 
Jak widać na pasku nawigacyjnym są różne opcje. M.in. Mój profil. Możemy w nim przejść do danych o profilu.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/dane_profilu_1.png)
 
Mamy podział na dane personalne, adresowe, a także hasło. W przypadku danych personalnych nie jest możliwa ich zmiana. Dane adresowane możemy modyfikować. Aby to zrobić należy kliknąć w ikonkę która znajduje się na tym samym poziomie co napis „ Dane adresowe”. Po kliknięciu kontrolki input stają się aktywne i możemy zmieniać wartości, które aktualnie są przypisane do profilu. Po ponownym kliknięciu w ikonkę wychodzimy z trybu edycji, a nasze dane są aktualizowane w bazie danych.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/dane_profilu_2.png)
 
Dostępna jest także sekcja „ Zmień hasło”. Musimy wpisać stare hasło, nowe hasło i ponownie te same nowe hasło. Jeśli wprowadzimy niepoprawne dane- np. złe stare hasło, albo inne nowe hasła jesteśmy poinformowani o błędzie takim samym error toastem jak w przypadku logowania. W przypadku wprowadzenia poprawnych danych hasło zostaje zmienione.
Następna sekcja którą możemy wybrać to sekcja „ Moje pojazdy”. Mamy tam swoje pojazdy które dodaliśmy wcześniej. 
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/moje_pojazdy_1.png)
 
Możemy dodać nowy pojazd. Po kliknięciu w żółty okrągły przycisk zostaje rozwinięty formularz za pomocą którego możemy wprowadzić dane o nowym pojeździe.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/moje_pojazdy_2.png)
 
Gdy klikniemy w konkretny pojazd zostają rozwinięte opcje. 
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/moje_pojazdy_3.png)
 
Możemy usunąć wybrany pojazd albo zobaczyć go w szczegółowym widoku.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/moje_pojazdy_4.png)
 
W szczegółowym widoku pojazdu mamy zdjęcie pojazdu ( jeszcze nie zostało to dokończone), informacje o pojeździe, a także dokonane naprawy.
Kolejną sekcją jest sekcja moje wizyty.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/moje_wizyty_1.png)
 
Jest podział na nadchodzące wizyty i już ukończone. Mamy wypisane informacje o wizycie takie jak data, godzina i koszt. Możemy także kliknąć w strzałkę w dół. Dzięki temu w przypadku wizyt, które już miały miejsce zobaczymy tylko opis. Natomiast w przypadku gdy wizyta dopiero będzie miała miejsce, po rozwinięciu, mamy także dodatkowo opcje. Możemy usunąć wizyty lub je przenieść na późniejszy termin.
Możemy także wejść w widok szczegółowy o warsztacie. 
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/warsztat_szczegoly_1.png)
 
Wówczas pokazuje nam się mapa na której mamy zaznaczony warsztat. 
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/warsztat_szczegoly_2.png)
 
Po wejściu w widok szczegółowy warsztatu mamy także harmonogram pracy. Jest to komponent, który wykonałem sam. Na obu końcach białej linii mamy godziny pracy warsztatu. W tym przypadku warsztat pracuje od 08:00 do 20:00. Pod czasem pracy warsztatu mamy zaznaczone zajęte godziny. Zatem nie możemy się umówić w godzinach, które obejmuje czerwony obszar na harmonogramie. Dla czytelności mamy napisane także dokładne godziny wizyty.
Do umówienia kolejnej nowej wizyty służy szary przycisk z czarnym znakiem „+” . Po jego kliknięciu pokazuje się formularz.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/warsztat_szczegoly_3.png)
 
Wybieramy pojazd z naszych dostępnych pojazdów. Wybieramy datę wizyty, możemy wpisać opis, a także wybrać cel wizyty. W polu cel wizyty mamy wszystkie serwisy, które są dostępne w wybranym warsztacie. Następnie wybieramy metodę płatności, która póki co jest tylko w celach informacyjnych i nic za sobą nie niesie. 
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/warsztat_szczegoly_4.png)
 
Możemy także odczytać informacje o warsztacie.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/warsztat_szczegoly_5.png)
 
Ostatnią sekcją jaką widzimy w widoku szczegółowym warsztatu jest sekcja komentarzy. Możemy dodać komentarz i ocenę. Ocena jest pokazywana w formie gwiazdek. Jeśli jesteśmy zalogowani na koncie z którego dodaliśmy komentarz mamy dostępne dwie ikonki ( długopis i śmietnik). Po kliknięciu ikonkę edycji ( długopis) jest włączany tryb edycji.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/warsztat_szczegoly_6.png)
 
Zmienia się wygląd inputów. Po zmianie, aby zatwierdzić zmiany należy ponownie kliknąć w ikonkę długopisu, a nasze dane są aktualizowane w bazie danych. Możemy usunąć nasz komentarz po kliknięciu w ikonę śmietnika.
Możemy także zalogować się jako mechanik. Wówczas jest pokazany nam panel z opcjami na pasku zadań.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/mechanik_warsztaty_1.png)
 
Mamy dostępne warsztaty i wizyty. Są to wszystkie warsztaty w których pracownik jest zatrudniony bądź jest ich właścicielem.
Można dodać nowy warsztat. Aby to zrobić należy kliknąć „ Dodaj warsztat”. Jest nam wówczas pokazany formularz. 
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/mechanik_warsztaty_2.png)
 
Po wpisaniu wartości w formularzu, dodajemy warsztat do bazy danych.
Można także zobaczyć wizyty na konkretny dzień.
![my_cars](https://github.com/DominikGoral/2020_6_DG_FixMyCar/blob/master/images/mechanik_wizyty_1.png)
 
Możemy je usunąć z pozycji mechanika. Może wystąpić taka konieczność gdyż poprzednia wizyta może się przedłużyć.
