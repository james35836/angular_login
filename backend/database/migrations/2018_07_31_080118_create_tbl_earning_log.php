<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTblEarningLog extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_earning_log', function (Blueprint $table) 
        {
            $table->increments('earning_log_id');
            $table->integer('earning_log_slot_id')->unsigned();
            $table->double('earning_log_amount');
            $table->string('earning_log_plan_type');
            $table->string('earning_log_entry_type');
            $table->integer('earning_log_cause_id')->unsigned()->nullable();
            $table->integer('earning_log_cause_membership_id')->unsigned()->nullable();
            $table->integer('earning_log_cause_level')->default(0);
            $table->string('earning_log_date_created');

            $table->foreign('earning_log_slot_id')->references('slot_id')->on('tbl_slot')->onDelete('cascade');
            $table->foreign('earning_log_cause_id')->references('slot_id')->on('tbl_slot')->onDelete('cascade');
            $table->foreign('earning_log_cause_membership_id')->references('membership_id')->on('tbl_membership')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
