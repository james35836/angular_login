<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tbl_inventory extends Model
{
	protected $table = 'tbl_inventory';
	protected $primaryKey = "inventory_id";
    public $timestamps = false;

    public function scopeJoinItem($query)
	{
		 return $query->join('tbl_item', 'tbl_inventory.inventory_item_id', '=', 'tbl_item.item_id');
	}

	public function scopeItemTypeProduct($query)
	{
		 return $query->where('tbl_item.item_type', 'product');
	}

	public function scopeItemTypeMembershipkit($query)
	{
		 return $query->where('tbl_item.item_type', 'membership_kit');
	}
}

