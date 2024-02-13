import csv

from datetime import datetime, date


today = datetime.now()
notes = ''
age = []
month = []
group_array = [age, month]
name_file_origin = 'notes.csv'
location_file_origin = 'origin\\' + name_file_origin

with open(location_file_origin, newline='') as f:
    data = csv.reader(f, delimiter='|')
    notes = list(data)

# print(notes)


def getData(notes):
    for i in range(1, len(notes)):
        for j in range(len(notes[i])):
            print(notes[0][j] + ': ' + notes[i][j])
        print('')


def getAge(notes):
    # print(f"FECHANACIMIENTO,EDAD,MESES")
    for i in range(1, len(notes)):
        for j in range(len(notes[i])):
            if notes[0][j] == 'FECHANACIMIENTO':
                birthday = datetime.strptime(notes[i][j], "%Y-%m-%d")
                ageCalculate = today.year - birthday.year - \
                    ((today.month, today.day) <
                     (birthday.month, birthday.day))

                age.append(ageCalculate)

                difMonths = (
                    today.year - birthday.year) * 12 + today.month - birthday.month
                difMonths = difMonths-ageCalculate*12

                month.append(difMonths)
                """ print(
                    f"{birthday.strftime('%Y-%m-%d')},{ageCalculate},{difMonths}") """


# getData(notes)
getAge(notes)
group_array = [age, month]

header_with_age = notes[0] + ['EDAD'] + ['MESES']

# Imprimir datos
""" for i in range(1, len(notes)):
    if i <= len(age) and i <= len(month):
        print(','.join(map(str, notes[i] + [age[i-1], month[i-1]])))
    else:
        print(','.join(map(str, notes[i]))) """

rows_with_group = [row + [age[i-1], month[i-1]]
                   for i, row in enumerate(notes[1:], start=1)]

date_today = str(today.year)+str(today.month)+str(today.day)
name_result_file = 'Resultado_' + date_today + '.csv'
location_file_result = 'results\\' + name_result_file


print('Se genera el archivo con éxito: ', name_result_file)

with open(location_file_origin, 'w', newline='') as f:
    writer = csv.writer(f, delimiter='|')
    writer.writerow(header_with_age)
    writer.writerows(rows_with_group)
