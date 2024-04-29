import csv
import json
import pymongo

def scrape_csv(file_path):
    liste_etablissements = {}
    # Ouvrir le fichier CSV
    with open(file_path, 'r') as csv_file:
        # Lire le contenu du fichier CSV
        csv_reader = csv.reader(csv_file)
        first_row = next(csv_reader)

        # Parcourir chaque ligne du fichier CSV
        for row in csv_reader:
            # Faire quelque chose avec les données de chaque ligne
            # Par exemple, afficher la première colonne
            etablissement = {}
            for i in range(len(first_row)):
                if row[i] != '' and first_row[i] != 'tags':
                    etablissement[first_row[i]] = row[i]
                elif first_row[i] == 'tags':
                    tags = row[i].split(', "')
                    tags_dict = {}
                    for tag in tags:
                        tag = tag.replace('"', '')
                        tag = tag.split('=>')
                        tags_dict[tag[0]] = tag[1]
                    etablissement['tags'] = json.dumps(tags_dict, ensure_ascii=False)
            if etablissement['amenity'] not in liste_etablissements.keys():
                liste_etablissements[etablissement['amenity']] = [etablissement]
            else:
                liste_etablissements[etablissement['amenity']].append(etablissement) 
        return liste_etablissements
            

# Exemple d'utilisation
file_path = './Restaurants.csv'
liste_restaurants = scrape_csv(file_path)

# liste en JSON
json_liste = json.dumps(liste_restaurants)

# Connexion à la base de données
client = pymongo.MongoClient("mongodb://localhost:30000/")
db = client["restaurants"]
for key in liste_restaurants.keys():
    collection = db[key]
    collection.insert_many(liste_restaurants[key])
    collection.create_index('name')
    collection.create_index('opening_hours')