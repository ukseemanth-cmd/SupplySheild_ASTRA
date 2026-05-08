from fastapi import APIRouter, Depends, HTTPException
from typing import List, Any
from app.services.ai_service import AIService

router = APIRouter()

@router.get("/")
async def get_commodities():
    """
    Get all tracked commodities and their current prices.
    """
    return [
        {"id": 1, "name": "Petroleum", "price": 101.2, "trend": "up", "status": "warning"},
        {"id": 2, "name": "LPG", "price": 950.0, "trend": "neutral", "status": "success"},
        {"id": 3, "name": "Tomato", "price": 45.0, "trend": "up", "status": "danger"},
    ]

@router.get("/{commodity_id}/prediction")
async def get_commodity_prediction(commodity_id: int):
    """
    Get AI-powered price prediction for a specific commodity.
    """
    ai_service = AIService()
    prediction = ai_service.predict_price(commodity_id)
    explanation = ai_service.generate_explanation(commodity_id, "market instability")
    
    return {
        "commodity_id": commodity_id,
        "current_price": 101.2,
        "predicted_price": 105.4,
        "confidence": 0.88,
        "explanation": explanation
    }
