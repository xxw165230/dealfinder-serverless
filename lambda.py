import boto3
import os
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):
	
	county = event["county"]
	
	dynamodb = boto3.resource('dynamodb')
	table = dynamodb.Table(os.environ['DB_TABLE_NAME'])
	
	items = table.scan( FilterExpression=Attr('County').eq(county),ProjectionExpression="Property_ID,Address,Property_Type,Listing_Price")
	return items["Items"]

		
