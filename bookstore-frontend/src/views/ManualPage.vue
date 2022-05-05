<template>
  <div>
    <v-app>
      <v-container>
        <div class="head-name" style="padding-top: 2rem">
          <center><h1>User Manual</h1></center>
        </div>
        <v-card color="#FFFEEB" class="font">
          <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1">
              How to buy e-book
              <small>วิธีการสั่งซื้อหนังสือ</small>
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card color="#FFF3F3" class="mb-12">
                <div class="how_to">
                  <ul>
                    <div class="answer_how_to">
                      <p
                        class="how-to-buy"
                        style="text-indent: 1em; margin-top: 10px"
                      >
                        1. กดเลือกหนังสือที่ต้องการ
                      </p>
                      <div
                        class="how-to-buy"
                        align="center"
                        style="margin: 10px"
                      >
                        <v-img
                          src="https://www.mebmarket.com/web/dist/assets/images/how_to/how_to_buy_web_1.jpeg"
                          style="max-width: 600px"
                          width="100%"
                          alt="meb e-book how to buy"
                        />
                      </div>
                      <p
                        class="how-to-buy"
                        style="text-indent: 1em; margin-top: 10px"
                      >
                        2. กดปุ่ม "ซื้อ"
                      </p>
                      <div
                        class="how-to-buy"
                        align="center"
                        style="margin: 10px"
                      >
                        <v-img
                          src="https://www.mebmarket.com/web/dist/assets/images/how_to/how_to_buy_web_2.jpeg"
                          style="max-width: 600px"
                          width="100%"
                          alt="meb e-book how to buy"
                        />
                      </div>
                      <p
                        class="how-to-buy"
                        style="text-indent: 1em; margin-top: 10px"
                      >
                        3. กดปุ่ม "ชำระเงิน"
                      </p>
                      <div
                        class="how-to-buy"
                        align="center"
                        style="margin: 10px"
                      >
                        <v-img
                          src="https://www.mebmarket.com/web/dist/assets/images/how_to/how_to_buy_web_3.jpeg"
                          style="max-width: 600px"
                          width="100%"
                          alt="meb e-book how to buy"
                        />
                      </div>
                      <p
                        class="how-to-buy"
                        style="text-indent: 1em; margin-top: 10px"
                      >
                        4. ตรวจสอบสรุปรายชื่อหนังสือที่ต้องการซื้อ แล้วกดปุ่ม
                        "ชำระเงิน"
                      </p>
                      <div
                        class="how-to-buy"
                        align="center"
                        style="margin: 10px"
                      >
                        <v-img
                          src="https://www.mebmarket.com/web/dist/assets/images/how_to/how_to_buy_web_4.jpeg"
                          style="max-width: 600px"
                          width="100%"
                          alt="meb e-book how to buy"
                        />
                      </div>

                      <p
                        class="how-to-buy"
                        style="text-indent: 1em; margin-top: 10px"
                      >
                        5. หากยังไม่ได้ล็อกอินเข้าระบบ จะต้องล็อกอินก่อน
                        (หากล็อกอินแล้ว ให้ข้ามไปข้อถัดไป)
                      </p>
                      <div
                        class="how-to-buy"
                        align="center"
                        style="margin: 10px"
                      >
                        <v-img
                          src="https://www.mebmarket.com/web/dist/assets/images/how_to/how_to_buy_web_5.jpeg"
                          style="max-width: 600px"
                          width="100%"
                          alt="meb e-book how to buy"
                        />
                      </div>

                      <p
                        class="how-to-buy"
                        style="text-indent: 1em; margin-top: 10px"
                      >
                        6. เลือกช่องทางการชำระเงินที่ต้องการ
                      </p>

                      <p
                        class="how-to-buy"
                        style="text-indent: 1em; margin-top: 10px"
                      >
                        7. กดปุ่ม "ชำระเงิน"
                        และดำเนินการตามขั้นตอนจนชำระเงินสำเร็จ
                      </p>

                      <div
                        class="how-to-buy"
                        align="center"
                        style="margin: 10px"
                      >
                        <v-img
                          src="https://www.mebmarket.com/web/dist/assets/images/how_to/how_to_buy_web_6.jpeg"
                          style="max-width: 600px"
                          width="100%"
                          alt="meb e-book how to buy"
                        />
                      </div>
                    </div>
                  </ul>
                </div>
              </v-card>
              <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
              <v-btn text @click="e6 = --e6"> Previous </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">
              How to pay for e-book'
              <small>ขั้นตอนการชำระเงิน</small>
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card color="#FFFEEB" class="mb-12">
                <p
                  class="how-to-buy"
                  style="text-indent: 1em; margin-top: 10px"
                >
                  1.สแกน QR Code เพื่อชำระเงิน
                </p>

                <div class="how-to-buy" align="center" style="margin: 10px">
                  <v-img
                    src="../components/image/examplePayment.png"
                    style="max-width: 600px"
                    width="100%"
                    alt="meb e-book how to buy"
                  />
                </div>
              </v-card>
              <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
              <v-btn text @click="e6 = --e6"> Previous </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">
              How to Read
              <small>วิธีอ่าน e-book</small>
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card color="#FFF3F3" class="mb-12">
                <div class="how-to-buy" align="center" style="margin: 10px">
                  <v-img
                    src="../components/image/exampleHowRead.png"
                    style="max-width: 600px"
                    width="100%"
                    alt="meb e-book how to buy"
                  />
                </div>
                <div style="padding: 1rem">
                  <p>
                    ท่านสามารถอ่าน e-book ของ meb ได้
                    บนอุปกรณ์ต่างๆได้ที่หลากหลาย ไม่ว่าจะเป็น Smart Phone,
                    Tablet หรือคอมพิวเตอร์ ผ่าน Application ชื่อ meb: mobile
                    e-books บนระบบยอดนิยมต่างๆ
                  </p>
                </div>
              </v-card>
              <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
              <v-btn text @click="e6 = --e6"> Previous </v-btn>
            </v-stepper-content>

            <v-stepper-step step="4"
              >How to Sell<small>การสมัครขาย E-book</small>
            </v-stepper-step>
            <v-stepper-content step="4">
              <v-card color="#FFFEEB" class="mb-12">
                <div style="padding: 1rem">
                  หลังจากที่เข้ามายังเว็บไซต์
                  <a href="https://www.mebmarket.com/"
                    >https://www.mebmarket.com/index.php</a
                  >
                  คุณนักเขียนสามารถ สมัครขาย E-book กับพวกเรา ได้ง่าย ๆ
                  โดยทำตามขั้นตอน ดังนี้
                  <div>
                    <a
                      style="font-weight: 500; cursor: pointer"
                      href="https://www.mebmarket.com/?action=register_publisher"
                      >คลิกสมัครขายอีบุ๊ก</a
                    >
                    ที่หน้าแรกของเว็บไซต์
                  </div>
                </div>
                <div class="how-to-buy" align="center" style="margin: 10px">
                  <v-img
                    src="https://www.mebmarket.com/web/dist/assets/images/how_to/HowtoSell03.jpg"
                    style="max-width: 600px"
                    width="100%"
                    alt="meb e-book how to buy"
                  />
                </div>
                <div class="how-to-buy" align="center" style="margin: 10px">
                  <v-img
                    src="https://www.mebmarket.com/web/dist/assets/images/how_to/HowtoSell01.jpg"
                    style="width: 100%; max-width: 300px"
                    alt="meb e-book how to buy"
                  />
                </div>
                <div class="how-to-buy" align="center" style="margin: 10px">
                  <v-img
                    src="https://www.mebmarket.com/web/dist/assets/images/how_to/HowtoSell02.jpg"
                    style="width: 100%; max-width: 300px"
                    alt="meb e-book how to buy"
                  />
                </div>
                <div style="padding: 1rem">
                  <p>
                    เมื่อคุณนักเขียนเข้าหน้าสมัครขายอีบุ๊กแล้ว
                    ให้กรอกข้อมูลให้ครบถ้วน
                    แล้วคุณนักเขียนจะต้องอ่านเงื่อนไขข้อตกลงการให้บริการระบบวรรณกรรมอิเล็กทรอนิกส์
                    และข้อตกลงเงื่อนไขส่วนแบ่งรายได้ ซึ่งเป็นส่วนสำคัญมาก ๆ
                    ที่คุณนักเขียนจะต้องอ่านอย่างรอบคอบ และทำความเข้าใจ
                    แล้วกดยอมรับเงื่อนไข หลังจากที่ยอมรับเงื่อนไขแล้ว
                    คุณนักเขียนสามารถกด Continue หลังจากนั้น
                    ก็รอการอนุมัติจากเจ้าหน้าที่ของ meb ซึ่งใช้เวลาประมาณ 1
                    วันทำการ หลังจากที่ได้รับการอนุมัติ
                    คุณนักเขียนก็สามารถอัปโหลดหนังสือ เข้ามาที่ระบบได้เลย
                  </p>
                </div>
              </v-card>
              <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
              <v-btn text @click="e6 = --e6"> Previous </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    e6: 1,
    e1: 1,
    username: "",
    password: "",
    confirmpassword: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    email: "",
    telephone: "",
    inputRules: [(v) => !!v || "Required."],
    valid: false,
  }),
  methods: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
.content {
  max-width: 800px;
  margin: auto;
  background: rgb(250, 206, 255);
  padding: 10px;
  font-family: "Kanit", sans-serif;
}
.font {
  font-family: "Kanit", sans-serif;
}
</style>