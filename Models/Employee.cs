namespace AngularTemplateDrivenFormsLab.Models
{
    public class Employee
    {
        public int Id { set; get; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsFullTime { get; set; }
        public string PaymentType { get; set; }
        public string PrimaryLanguage { get; set; }
    }
}
