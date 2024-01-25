"""
write your functions here so I can translate them into javascript and use it on 
the website
"""
import time

usage_list = []

def electricity_usage():
    how_many_devices = int(input("\nEnter the amount of devices being used: "))
    watt = 0
    watt_increment = 0
    for d in range(how_many_devices):
        name_d = input("What is the name of the device (general or specific): ")
        watt_d = float(input("What is its wattage: "))
        usage_list.append(watt_d)
    for watt in usage_list:
        watt_increment += watt
    print(usage_list, " = ", watt_increment)

electricity_usage()

length_of_watts = len(usage_list)

while True:
    more_devices = input("To add more devices using electricity press Spacebar and enter, otherwise to add later press enter, and to leave press q ")
    if more_devices == " ":
        electricity_usage()
    if more_devices == "":
        print("No new wattages were added ")
    if len(usage_list) > length_of_watts:
        print("New wattage(s) was/were added ")
        length_of_watts = len(usage_list)
    if more_devices == "q":
        break

        
    time.sleep(1)
    
def watts_to_kilowatts(watts):
    return watts / 1000

def kilowatts_to_watts(kilowatts):
    return kilowatts * 1000
